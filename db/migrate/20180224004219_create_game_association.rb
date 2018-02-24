class CreateGameAssociation < ActiveRecord::Migration[5.1]
  def change

    add_reference :games, :user, foreign_key: true
    add_reference :games, :steam_app, foreign_key: true
  end
end
