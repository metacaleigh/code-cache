Rails.application.routes.draw do
  resources :blogs, only: [:index, :show]
  resources :tags
  resources :taggables
  resources :snippets
  resources :links
  resources :notes
  resources :resources
  resources :folders

  resources :folders do
    resources :notes, only: [:index, :show]
  end

  resources :folders do
    resources :snippets, only: [:index, :show]
  end

  resources :folders do
    resources :links, only: [:index, :show]
  end
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/folder/links', to: 'folders#get_links'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
