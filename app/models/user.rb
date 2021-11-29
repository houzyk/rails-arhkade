class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :nickname, presence: true, uniqueness: true, length: { minimum: 5 }
  has_many :sessions, dependent: :destroy
  has_many :games, through: :sessions
  has_one_attached :photo
end
