Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  namespace :api do
    get "/users" => "users#index"
    post "/users" => "users#create"
    get "/users/:id" => "users#show"
    patch "/users/:id" => "users#update"
    delete "/users/:id" => "users#delete"
    post "/sessions" => "sessions#create"

    get "/reviews" => "reviews#index"
    post "/reviews" => "reviews#create"
    get "/reviews/:id" => "reviews#show"
    patch "/reviews/:id" => "reviews#update"
    delete "/reviews/:id" => "reviews#delete"

    get "/resources" => "resources#index"
    post "/resources" => "resources#create"
    get "/resources/:id" => "resources#show"
    patch "/resources/:id" => "resources#update"
    delete "/resources/:id" => "resources#delete"
    post "/sessions" => "sessions#create"

  end

    resources :resources
    root 'resources#index'
end

