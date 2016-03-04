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

get "/ragu" do
   erb :ragu, :layout => false
end

get "/ziti" do
   erb :ziti, :layout => false
end

get "/lasagna" do
   erb :lasagna, :layout => false
end

client = SendGrid::Client.new do |c|
  c.api_key = ENV['SENDGRID_API_KEY']
end

post '/submit' do
  @content = params["comment"]
  mail = SendGrid::Mail.new do |m|
   m.to = 'zerega85@gmail.com'
   m.from = 'zerega85@gmail.com'
   m.subject = "website correspondance"
   m.text = @content
end

response = client.send(mail)
end


