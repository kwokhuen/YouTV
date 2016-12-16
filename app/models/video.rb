class Video < ApplicationRecord
	validates :youtube_id, presence: true
	validates :category_id, presence: true
	validates :sub_category_id, presence: true
end
