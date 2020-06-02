class Tag < ApplicationRecord

  class Tag < ApplicationRecord
    has_many :taggings
    has_many :resources, through: :taggings
  end

end
