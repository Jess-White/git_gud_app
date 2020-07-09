Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE

  namespace :api do
    get "/users" => "users#index"
    post "/users" => "users#create"
    get "/users/:id" => "users#show"
    patch "/users/:id" => "users#update"
    delete "/users/:id" => "users#destroy"

    post "/sessions" => "sessions#create"

    get "/logged_in" => "sessions#logged_in"

    get "/resources" => "resources#index"
    post "/resources" => "resources#create"
    get "/resources/:id" => "resources#show"
    patch "/resources/:id" => "resources#update"
    delete "/resources/:id" => "resources#destroy"

    get "/reviews" => "reviews#index"
    post "/reviews" => "reviews#create"
    get "/reviews/:id" => "reviews#show"
    patch "/reviews/:id" => "reviews#update"
    delete "/reviews/:id" => "reviews#destroy"

    get "/tags" => "tags#index"
    post "/tags" => "tags#create"
    get "/tags/:id" => "tags#show"

    get "/favorites" => "favorites#index"
    post "/favorites" => "favorites#create"
    get "/favorites/:id" => "favorites#show"
    delete "/favorites/:id" => "favorites#destroy"

    # from tutorial
    # resources :resources
    # root 'resources#index'

  end
end
