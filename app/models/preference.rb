class Preference < ApplicationRecord
	validates :user_id, presence: true
	validates :sub_category_id, presence: true
	validates :weight, presence: true

  belongs_to :user
  belongs_to :sub_category
end
