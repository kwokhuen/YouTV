class User < ApplicationRecord
	has_secure_password

	validates :full_name, presence: true
	validates :email, presence: true, uniqueness: true

  has_many :video_histories
  has_many :favorites
  has_many :preferences

end
