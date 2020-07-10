class Review < ApplicationRecord
  belongs_to :user
  belongs_to :resource

  validates :title, :body, :rating, presence: true
end
