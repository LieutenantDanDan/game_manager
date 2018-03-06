class User < ApplicationRecord
  has_secure_password
  has_many :games
  has_many :steam_apps, through: :games




  def update_games
    games = Api::Steam.fetch_user_apps(self.steam_id)

    games.each do |game|
      existing_game = self.games.joins(:steam_app).where("steam_apps.app_id = ?", game[:appid]).first
      if existing_game
        existing_game.update_attribute(:total_playtime, game[:playtime_forever])
      else
        steam_app = SteamApp.where(app_id: game[:appid]).first
        self.games.create!(steam_app: steam_app, total_playtime: game[:playtime_forever])
      end

    end
  end

end
