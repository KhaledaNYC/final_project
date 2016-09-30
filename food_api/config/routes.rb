Rails.application.routes.draw do
  resources :users



  namespace :api do
    namespace :v1 do
      get '/hello', to: 'sessions#hello'
      post '/login', to: 'sessions#create'
      resources :sessions


    end
  end
end
