class Favorite < ApplicationRecord
	validates :video_id, presence: true
	validates :user_id, presence: true
end
