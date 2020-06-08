Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  namespace :api do
    get "/users" => "users#index"
    post "/users" => "users#create"
    get "/users" => "users#show"
    patch "/users" => "users#update"
    delete "/users" => "users#delete"
    post "/sessions" => "sessions#create"

    post "/reviews" => "reviews#create"
    get "/reviews" => "reviews#show"
    patch "/reviews" => "reviews#update"
    delete "/reviews" => "reviews#delete"

  end

    # resources :resources
    # root 'resources#index'
end
