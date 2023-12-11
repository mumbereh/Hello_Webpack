# config/routes.rb
Rails.application.routes.draw do
  root 'greetings#index'
  get '/random_greeting', to: 'greetings#random'
end