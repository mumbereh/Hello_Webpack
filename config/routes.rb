# config/routes.rb
Rails.application.routes.draw do
  root 'random#index'
  get '/random_greeting', to: 'greetings#random'
end