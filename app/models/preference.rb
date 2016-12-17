class Preference < ApplicationRecord
	belongs_to :user
	belongs_to :sub_category
	validates :user_id, presence: true
	validates :sub_category_id, presence: true
	validates :user_id, uniqueness: { scope: :sub_category_id }
	validates_numericality_of :weight, only_integer: true

  belongs_to :user
  belongs_to :sub_category
end
