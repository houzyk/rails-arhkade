class Game < ApplicationRecord
  has_many :sessions, dependent: :destroy
  has_many :users, through: :sessions
end
