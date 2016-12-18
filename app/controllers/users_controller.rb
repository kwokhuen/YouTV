class UsersController < ApplicationController

  def register
    @user = User.new
    render component: "Register", props: {
      user: @user
    }, tag: 'div'
  end

  def create
    @user = User.create(user_params)
    if request.xhr?
      if @user.valid?
        redirect_to action: :login
      else
        @errors = @user.errors.full_messages
        render :register
      end
    end
  end

  def login

  end

  def validate
    @user = User.find_by(email: params["user"]["email"])
    if @user && @user.authenticate(params["user"]["password"])
      session[:user_id] = @user.id
      redirect_to :root #or someplace else
    else
      @error = "Incorrect Username/Password"
      render :login
    end
  end

  def logout
    reset_session
    @user = nil
    redirect_to :root
  end

private

  def user_params
    params.require(:user).permit(:full_name, :email, :password)
  end

end
