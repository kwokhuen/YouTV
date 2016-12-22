class Category < ApplicationRecord
	has_many :sub_category
	validates :name, presence: true

  has_many :videos
  has_many :sub_categories


  def pick_a_video(user)
    sample_video = Video.where(sub_category_id: SubCategory.find_by(name: choose_weighted(user)).id).sample
    return {youtube_id: sample_video.youtube_id, sub_category_id: sample_video.sub_category.id}
    # if user.video_history.include?(sample_video)
    #   pick_a_video(user)
    # else
    #   return {youtube_id: sample_video.youtube_id, sub_category_id: sample_video.sub_category.id}
    # end
  end

  def sub_category_hash(user)
    hash = {}
    sub_categories.each do |sub_category|
      hash.merge!({sub_category.name => user.preference(sub_category)})
    end
    return hash
  end

  def choose_weighted(user)
    weighted = sub_category_hash(user)
    sum = weighted.inject(0){|sum, item_and_weight| sum += item_and_weight[1]}
    target = rand(sum)
    weighted.each do |item, weight|
      return item if target <= weight
      target -= weight
    end
  end

end

