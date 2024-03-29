Rails.application.routes.draw do
  
  resources :resources, only:[:index, :update, :show]
  resources :categories, only:[:index, :update, :show, :create]
  resources :activities, only: [:index, :update, :show]
  resources :experiences, only: [:index, :update, :destroy, :create]
  patch '/users/:id', to: 'users#update'
  get '/users', to: 'users#index'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
 