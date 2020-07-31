class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true

  has_many :resources
  has_many :reviews
  has_many :favorites, dependent: :destroy
  has_many :favorite_resources, through: :favorites, source: :resource
end
