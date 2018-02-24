class Game < ApplicationRecord
  belongs_to :user
  belongs_to :steam_app
end
