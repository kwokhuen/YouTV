class Category < ApplicationRecord
	has_many :sub_category
	validates :name, presence: true

  has_many :videos
  has_many :sub_categories
end
