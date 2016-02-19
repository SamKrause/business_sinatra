require 'sinatra'
require "sendgrid-ruby"

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

get "/contact" do
  erb :contact
end

get "/products" do
  erb :products
end
