class Category < ApplicationRecord
	has_many :sub_category
	validates :name, presence: true
end
