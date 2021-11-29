Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :games, only: %i[index] do
    resources :sessions, only: %i[index create]
  end
  get 'tictactoe', to: 'games#tictactoe'
  get 'checkers', to: 'games#checkers'
  get 'snake', to: 'games#snake'
  get 'twothousandfourtyeight', to: 'games#twothousandfourtyeight'
  get 'minesweeper', to: 'games#minesweeper'
  get 'breakout', to: 'games#breakout'
  get 'rubix', to: 'gamesrubix'
end
