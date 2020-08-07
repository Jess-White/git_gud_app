class Review < ApplicationRecord
  belongs_to :user
  belongs_to :resource
  default_scope { includes(:user) }

  validates :title, :body, :rating, presence: true
end
