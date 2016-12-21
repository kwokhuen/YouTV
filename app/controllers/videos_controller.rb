class VideosController < ApplicationController
  respond_to :json
  before_action :find_user

  def pick_a_category
    @category = Category.find(params["category"]["category_id"].to_i)
    render json: {youtube_id: @category.pick_a_video(@user)[:youtube_id], sub_category_id: @category.pick_a_video(@user)[:sub_category_id], category_id: @category.id}
  end

  def thumbs_up
    @preference = Preference.find_by(sub_category_id: params["subCategoryId"], user_id: @user.id)
    @preference.thumbs_up
  end

  def thumbs_down
    @preference = Preference.find_by(sub_category_id: params["subCategoryId"], user_id: @user.id)
    @preference.thumbs_down
  end

  def favorite
    video = Video.find_by(youtube_id: params["youtube_id"])
    Favorite.find_or_create_by(user_id: @user.id, video_id: video.id)
  end

  private

  def find_user
     @user ||= User.find(session[:user_id])
  end

end
