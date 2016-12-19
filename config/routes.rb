Rails.application.routes.draw do
	root to: "site#index"

  get 'user/register' => "users#register"
  post 'user/register' => "users#create"
  get 'user/login' => "users#login"
  post 'user/login' => "users#validate"
  get 'user/logout' => "users#logout"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
