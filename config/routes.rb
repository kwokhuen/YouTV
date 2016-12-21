Rails.application.routes.draw do
	root to: "site#index"

  get 'user/register' => "users#register"
  post 'user/register' => "users#create"
  get 'user/login' => "users#login"
  post 'user/login' => "users#validate"
  get 'user/logout' => "users#logout"

	# routes for videos
  post 'video/thumbs_up' => 'videos#thumbs_up'
  post 'video/thumbs_down' => 'videos#thumbs_down'
  get 'video/category' => 'videos#pick_a_category'
  post 'video/favorite' => 'videos#favorite'
	# resources 'videos'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
