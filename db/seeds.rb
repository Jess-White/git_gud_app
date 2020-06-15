# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# User.create(first_name: "Mike", last_name: "McFaddin", email: "mikemcfaddin@gmail.com", user_name: "Magic Mike", password: "password", password_confirmation: "password")
# User.create(first_name: "Sara", last_name: "Lawrence", email: "slawrence@gmail.com", user_name: "Sarabee", password: "password", password_confirmation: "password")
# User.create(first_name: "Derek", last_name: "Derrickson", email: "derekd@gmail.com", user_name: "Derek!!!", password: "password", password_confirmation: "password")
# User.create(first_name: "Gayle", last_name: "Cooper", email: "GCoop@gmail.com", user_name: "cgeye", password: "password", password_confirmation: "password")
# User.create(first_name: "Robert", last_name: "Richardson", email: "rrichards@gmail.com", user_name: "Robbie Boy", password: "password", password_confirmation: "password")

# Resource.create(url:"waffle.com", name:"Waffle Tutorials", resource_type: :tutorial, format: :text, difficulty: :advanced, cost: 2, user_id: 1)
# Resource.create(url:"cinnabon.com", name:"Cinnabon Tutorials", resource_type: :tutorial, format: :video, difficulty: :basic, cost: 3, user_id: 1)
# Resource.create(url:"monkey_bread.com", name:"Monkey Bread Tutorials", resource_type: :tutorial, format: :video, difficulty: :advanced, cost: 1, user_id: 1)
# Resource.create(url:"scone_and_jam.com", name:"Scone and Jam Tutorials", resource_type: :tutorial, format: :video, difficulty: :basic, cost: 4, user_id: 1)
# Resource.create(url:"french_toast.com", name:"French Tutorials", resource_type: :tutorial, format: :text, difficulty: :advanced, cost: 2, user_id: 1)

# Review.create(title: "Review of Waffle Tutorial", body: "This tutorial was golden and delicious", rating: 4, user_id: 1, resource_id: 3)
# Review.create(title: "Waffle Tutorial Review", body: "I am not a fan of waffles", rating: 1, user_id: 2, resource_id: 3)
# Review.create(title: "Review of French Toast Tutorial", body: "This tutorial had too much egg", rating: 4, user_id: 2, resource_id: 7)
# Review.create(title: "French Toast", body: "This tutorial had just enough egg", rating: 4, user_id: 1, resource_id: 7)
# Review.create(title: "Review of French Toast Tutorial", body: "This tutorial was tasty and satisfying", rating: 4, user_id: 2, resource_id: 7)

# Tag.create(name: "Ruby")
# Tag.create(name: "JavaScript")
# Tag.create(name: "Ruby on Rails")
# Tag.create(name: "React")
# Tag.create(name: "Vue")
# Tag.create(name: "Java")
# Tag.create(name: "JS")
# Tag.create(name: "Python")
# Tag.create(name: "Angular")
# Tag.create(name: "Node")
# Tag.create(name: "C+")
# Tag.create(name: "C++")
# Tag.create(name: "C#")
# Tag.create(name: "Lisp")
# Tag.create(name: "Rust")
# Tag.create(name: "SQL")
# Tag.create(name: ".NET")
# Tag.create(name: "Elixir")
# Tag.create(name: "PHP")
# Tag.create(name: "HTML")
# Tag.create(name: "Bootstrap")
# Tag.create(name: "CSS")
# Tag.create(name: "Algorithms")

# Tagging.create(tag_id: 1, resource_id: 5)
# Tagging.create(tag_id: 2, resource_id: 5)
# Tagging.create(tag_id: 3, resource_id: 2)
# Tagging.create(tag_id: 4, resource_id: 2)

# Resource.create(url: "javascript.com", name: "javascript tutorials togo", resource_type: :tutorial, format: :text, difficulty: :beginner, cost: 4, user_id: 7, tag_ids: [2, 4, 7])
# Resource.create(url: "rubytutorials.com", name: "Really cool Ruby tutorials", resource_type: "tutorial", format: "video", difficulty: "intermediate", cost: 4, user_id: 7, tag_ids: [1, 3])
# Resource.create(url: "c+tutorials.com", name: "Really cool C+ tutorials", resource_type: :channel, format: :video, difficulty: :advanced, cost: 2, user_id: 7, tag_ids: [11, 21])
# Resource.create(url: "sqltutorials.com", name: "Really cool SQL tutorials", resource_type: :deep_dive, format: :text, difficulty: :intermediate, cost: 2, user_id: 7, tag_ids: [16])