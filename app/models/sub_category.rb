class SubCategory < ApplicationRecord
	has_many :preferences
	belongs_to :category
	validates :category_id, presence: true
	validates :name, presence: true

  has_many :preferences
  has_many :videos
  belongs_to :category
end
