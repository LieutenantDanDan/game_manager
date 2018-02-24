class CreateSteamApps < ActiveRecord::Migration[5.1]
  def change
    create_table :steam_apps do |t|
      t.string :name
      t.string :app_id

      t.timestamps
    end
  end
end
