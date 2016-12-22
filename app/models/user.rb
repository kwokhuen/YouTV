class User < ApplicationRecord
	has_many :video_histories
	has_many :favorites
	has_many :preferences
	has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :full_name, :email, presence: true
  validates :full_name, length: { minimum: 3, maximum: 25}, uniqueness: { case_sensitive: false }
  validates :email, length: { maximum: 250 }, uniqueness: { case_sensitive: false }, format: { with: VALID_EMAIL_REGEX }


  def preference(sub_category)
    preferences.where(sub_category_id: sub_category.id).reduce(0){|sum, preference| sum + preference.weight}
  end

  def create_preferences
    @categories = Category.all
    @categories.each do |category|
      @sub_categories = category.sub_categories
      @sub_categories.each do |sub_category|
        Preference.create(user_id: self.id,  sub_category_id: sub_category.id)
      end
    end
  end

  def preference(sub_category)
    preferences.where(sub_category_id: sub_category.id).reduce(0){|sum, preference| sum + preference.weight}
  end

  def create_preferences
    @categories = Category.all
    @categories.each do |category|
      @sub_categories = category.sub_categories
      @sub_categories.each do |sub_category|
        Preference.create(user_id: self.id,  sub_category_id: sub_category.id)
      end
    end
  end

  def top_sub_categories
    total_hash = []
    Category.all.each do |category|
      total_hash << category.sub_category_hash(self)
    end
    total_hash.reduce({}, :merge).sort_by{ |k, v| v }.reverse[0..5].to_h
  end

  def choose_weighted
    weighted = top_sub_categories
    sum = weighted.inject(0){|sum, item_and_weight| sum += item_and_weight[1]}
    target = rand(sum)
    weighted.each do |item, weight|
      return item if target <= weight
      target -= weight
    end
  end

  def pick_a_video
    sample_video = Video.where(sub_category_id: SubCategory.find_by(name: choose_weighted).id).sample
    return {youtube_id: sample_video.youtube_id, sub_category_id: sample_video.sub_category.id}
  end

  def pick_a_favorite
    sample_video = self.favorites.map{|favorite| favorite.video}.sample
    return {youtube_id: sample_video.youtube_id, sub_category_id: sample_video.sub_category.id}
  end

end
