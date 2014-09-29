get '/' do
  erb :index
end

post '/sams_fun_route' do
  # grab the data from the AJAX request and manipulate it in some way (multiply by 10)
  cool_thing_to_insert = (params[:cool_thing].to_i * 10).to_s
  # save that thing to the database or retrieve it if it's already there
  inserted = CoolThing.where(thing: cool_thing_to_insert).first_or_create
  # formulate some HTML with that thing and send the HTML as a response to the AJAX request
  "<h1>GIANT DIV #{inserted.thing}</h1>"
end

post '/whatever' do

  word_to_insert = (params[:cool_thing]).upcase

  present = CoolThing.where(thing: word_to_insert).first_or_create

  "<b>#{present.thing}</b><br><i>#{present.thing}</i><br><mark>#{present.thing}</mark>"
end

post '/scotland' do
  cows = (params[:cool_thing]).swapcase

  herd = CoolThing.where(thing: cows).first_or_create

  "<h2>#{herd.thing}</h2><p>First 100x100<br>pic googling Scotland.</p>"
end
