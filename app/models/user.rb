class User < ApplicationRecord
  has_many :games
  has_many :steam_apps, through: :games






end
