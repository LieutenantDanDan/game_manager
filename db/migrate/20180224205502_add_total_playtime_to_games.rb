class AddTotalPlaytimeToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :total_playtime, :integer
  end
end
