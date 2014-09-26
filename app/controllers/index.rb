require 'pry'

get '/' do
  erb :index
end

post '/cool_things' do
  p params
  @cool_thing = CoolThing.create(thing: params[:thing])
  # {thing: @cool_thing.thing}.to_json
  # binding.pry
  erb :"_cool_thing", layout: false
end


















post '/sams_fun_route' do
  # grab the data from the AJAX request and manipulate it in some way (multiply by 10)
  cool_thing_to_insert = (params[:cool_thing].to_i * 10).to_s
  # save that thing to the database or retrieve it if it's already there
  inserted = CoolThing.where(thing: cool_thing_to_insert).first_or_create
  # formulate some HTML with that thing and send the HTML as a response to the AJAX request
  "<h1>GIANT DIV #{inserted.thing}</h1>"
end
