class Video < ApplicationRecord
	validates :youtube_id, presence: true
	validates :category_id, presence: true
	validates :sub_category_id, presence: true

  has_many :video_histories
  has_many :favorites
  belongs_to :category
  belongs_to :sub_category
end
