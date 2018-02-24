module Api
  class Steam

    ACCESS_KEY = '90F0F7F757D336D0715EEEB895CEEE25'

    class << self

      def fetch_app_list

        response = HTTParty.get('http://api.steampowered.com/ISteamApps/GetAppList/v0002/').parsed_response
        response = response.with_indifferent_access

        app_list = response[:applist][:apps]

        count = 0
        app_list.each do |app|

          #break if count > 50
          existing_game = SteamApp.where(app_id: app[:appid]).first
          if existing_game
            existing_game.update_attribute(:name, app[:name])
          end
          SteamApp.create!(app_id: app[:appid], name: app[:name])

          count += 1
        end

      end

      def fetch_user_apps(steam_id)
        request = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/"
        request << "?#{ACCESS_KEY}&format=json"
        request << "&steamid=#{steam_id}"
        response = HTTParty.get(request).parsed_response.with_indifferent_access


        return response[:response][:games]


      end



    end



  end

end