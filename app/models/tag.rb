class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :resources, through: :taggings
end
