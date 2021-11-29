Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :games, only: %i[show index]
end
