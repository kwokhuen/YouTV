class Video < ApplicationRecord
	has_many :video_histories
	has_many :favorites
	belongs_to :category, optional: true  #what is optional: true?
	belongs_to :sub_category, optional: true
	validates :youtube_id, presence: true
	validates :title, presence: true
	validates :thumbnail_url, presence: true
	validates :embed_url, presence: true
	validates :category_id, presence: true
	validates :sub_category_id, presence: true

end
