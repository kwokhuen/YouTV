class User < ApplicationRecord
	has_many :video_histories
	has_many :favorites
	has_many :preferences
	has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :full_name, :email, presence: true
  validates :full_name, length: { minimum: 3, maximum: 25}, uniqueness: { case_sensitive: false }
  validates :email, length: { maximum: 250 }, uniqueness: { case_sensitive: false }, format: { with: VALID_EMAIL_REGEX }
end
