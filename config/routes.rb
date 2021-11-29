Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :games, only: %i[index] do
    resources :sessions, only: %i[index create]
  end
end
