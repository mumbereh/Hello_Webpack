# db/seeds.rb

greetings = [
  "Hello!",
  "Hey!",
  "Hi!",
  "Hello there!",
  "Hello Uganda....!"
]

greetings.each do |content|
  Message.find_or_create_by(content: content)
end
