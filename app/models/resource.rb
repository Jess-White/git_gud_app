class Resource < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :reviews
  has_many :favorites
  belongs_to :user

  validates :url, :name, :resource_type, :format, :difficulty, :cost, presence: true

  enum resource_type: [:cheat_sheet, :tutorial, :deep_dive, :channel]

  enum format: [:video, :text]

  enum difficulty: [:basic, :beginner, :intermediate, :advanced]

  def self.tagged_with(name)
    Tag.find_by!(name: name).resources
  end

  def self.tag_counts
    Tag.select("tags.*, count(taggings.tag_id) as count").joins(:taggings).group("taggings.tag_id")
  end

  #getter and setter method for creating a tag or tags
  def tag_list
    tags.map(&:name).join(", ")
  end

  def tag_list=(names)
    self.tags = names.split(",").map do |name|
      Tag.where(name: name.strip).first_or_create!
    end
  end
end
