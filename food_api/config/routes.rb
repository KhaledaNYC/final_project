Rails.application.routes.draw do
  resources :likes
  resources :menus
  resources :comments
  resources :ingredients
  resources :recipes
  resources :users



  namespace :api do
    namespace :v1 do
      get '/hello', to: 'sessions#hello'
      post '/login', to: 'sessions#create'
      resources :sessions


    end
  end
end
