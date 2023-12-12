# db/seeds.rb

greetings = [
  "Goodevening!",
  "Goodmorning!",
  "Goodafternoon!",
  "Hullo!",
  "Hello Uganda....!"
]

greetings.each do |content|
  Message.find_or_create_by(content: content)
end
