class Favorite < ApplicationRecord
	belongs_to :user
	belongs_to :video
	validates :video_id, presence: true
	validates :user_id, presence: true
	validates :user_id, uniqueness: { scope: :video_id }

end
