class Category < ApplicationRecord
	validates :name, presence: true

  has_many :videos
  has_many :sub_categories
end
