class SubCategory < ApplicationRecord
	validates :category_id, presence: true
	validates :name, presence: true
end
