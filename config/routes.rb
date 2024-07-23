Rails.application.routes.draw do
  get 'game/index'
  root 'game#index'
  resources :scores, only: [:index, :create]
end
