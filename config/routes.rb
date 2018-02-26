Rails.application.routes.draw do
  get 'welcome/index'

  get 'steam_apps/index'

  get 'steam_apps/show'

  get 'steam_apps/edit'

  get 'games/index'

  get 'games/show'

  get 'games/edit'

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
