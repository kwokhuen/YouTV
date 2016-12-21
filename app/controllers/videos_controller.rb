class VideosController < ApplicationController
  respond_to :json
  before_action :find_user
  include ApplicationHelper

  def pick_a_category
    @category = Category.find(params["category"]["category_id"].to_i)
    x = play_a_video(@user.id, @category.id)
    render json: {video: x}
  end

  def thumbs_up
    # thumbs up methodd
  end

  private

  def find_user
    @user = User.find(session[:user_id])
  end

end
