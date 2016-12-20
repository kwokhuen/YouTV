require 'pry'
class VideosController < ApplicationController
  respond_to :json
  before_action :find_user


  def pick_a_category
    @category = Category.find(params["category"]["category_id"].to_i)
    # x = weighted_videos_array(@category.id)
    # respond_to json: {videos: x.first}
  end

  def thumbs_up
    # thumbs up methodd
  end

  private

  def find_user
    @user = User.find(session[:user_id])
  end

end
