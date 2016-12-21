require 'pry'
module ApplicationHelper
  # MOVIE_ARRAY = weighted_videos_array(@category.id)
  # preferences = { :Comedy_central => 100,...}
  def choose_weighted(weighted)
    sum = weighted.inject(0) do |sum, item_and_weight|
            sum += item_and_weight[1]
          end
    target = rand(sum)
    weighted.each do |item, weight|
      return item if target <= weight
      target -= weight
    end
  end

  def thumbs_up(sub_category_id)
    category_id = SubCategory.find(sub_category_id).category_id
    preference = @user.preferences.find_by(sub_category_id: sub_category_id)
    preference.weight += 10
    preference.save
    weighted_videos_array(category_id)
  end

  def thumbs_down(sub_category_id)
    category_id = SubCategory.find(sub_category_id).category_id
    preference = @user.preferences.find_by(sub_category_id: sub_category_id)
    if preference.weight > 10
      preference.weight -= 10
      preference.save
    end
    weighted_videos_array(category_id)
  end

  def create_preference_hash(category_id)
    preferences = @user.preferences
    array = []
    Category.find(category_id).sub_categories.map{|subcategory| subcategory.id}.each do |sub_category_id|
      array << preferences.find_by(sub_category_id: sub_category_id)

    end
    hash = {}
    array.each do |preference|
      hash.merge!({preference.sub_category.name.to_sym => preference.weight})

    end
    hash
  end

  def weighted_videos_array(category_id)
    movie_array = []
    100.times { movie_array << choose_weighted(create_preference_hash(category_id)) }
    movie_array
  end

  def play_a_video(user_id, category_id)
    sub_category_name = weighted_videos_array(category_id).shift
    sample_video = Video.where(sub_category_id: SubCategory.find_by(name: sub_category_name).id).sample
    # if VideoHistory.find(video_id: sample_video.id)
    #   sample_video = Video.where(sub_category_id: SubCategory.find_by(name: sub_category_name).id).sample    else
    #   VideoHistory.create(user_id: user_id, video_id: sample_video.id)
    # end
      sample_video.youtube_id
  end

end
