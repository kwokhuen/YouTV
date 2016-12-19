module ApplicationHelper

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

  def random_hundred_videos(category_id)
    current_user.preferences

  end

  def thumbs_up(sub_category_id)
    preference = User.first.preferences.find_by(sub_category_id: sub_category_id)
    preference.weight += 10
    preference.save
  end

  def thumbs_down(sub_category_id)
    preference = User.first.preferences.find_by(sub_category_id: sub_category_id)
    if preference.weight > 10
      preference.weight -= 10
      preference.save
    end
  end

  def create_preference_hash(category_id)
    preferences = User.first.preferences
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
    array = []
    100.times { array << choose_weighted(create_preference_hash(category_id)) }
    array
  end
end
