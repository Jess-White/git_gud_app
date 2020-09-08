# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "Michael", last_name: "McFaddin", email: "michaelmcfaddin@gmail.com", user_name: "Magic Mike", password: "password", password_confirmation: "password")
User.create(first_name: "Jess", last_name: "White", email: "jesswhite@gmail.com", user_name: "jesswhite", password: "password", password_confirmation: "password")
User.create(first_name: "Derek", last_name: "Derrickson", email: "derekd@gmail.com", user_name: "Derek!!!", password: "password", password_confirmation: "password")
User.create(first_name: "Gayle", last_name: "Cooper", email: "GCoop@gmail.com", user_name: "cgeye", password: "password", password_confirmation: "password")
User.create(first_name: "Robert", last_name: "Richardson", email: "rrichards@gmail.com", user_name: "Robbie Boy", password: "password", password_confirmation: "password")

Resource.create(
  url: "https://scrimba.com/course/glearnreact",
  name: "Learn React for free",
  resource_type: :tutorial,
  format: :video,
  difficulty: :intermediate,
  cost: 0,
  user_id: 1,
  author: "Bob Ziroll",
  description: "This tutorial course is the perfect starting point for aspiring React developers. 
  You'll learn all the key concepts while building two apps and doing interactive coding challenges along the way."
)
Resource.create(
  url: "https://www.youtube.com/watch?v=pKd0Rpw7O48",
  name: "How to build a REST API with Node js & Express",
  resource_type: :channel,
  format: :video,
  difficulty: :intermediate,
  cost: 0,
  user_id: 2,
  author: "Mosh Hamedani",
  description: "This tutorial is one part of a much larger tutorial covering Node. The basics of RESTful APIs with and introduction to using Express.js with Node.js are covered. 
  The video also goes over handling HTTP GET, POST, PUT and DELETE requests with Express."
)
Resource.create(
  url: "https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/",
  name: "Setting up a RESTful API with Node.js and PostgreSQL",
  resource_type: :tutorial,
  format: :text,
  difficulty: :intermediate,
  cost: 0,
  user_id: 3,
  author: "Tani Rascia",
  description: "In this tutorial, you'll learn how to create your own RESTful API in a Node.js environment running on an Express server and utilizing a PostgresSQL database."
)
Resource.create(
  url: "https://sqlbolt.com/",
  name: "Introduction to SQL",
  resource_type: :tutorial,
  format: :text,
  difficulty: :beginner,
  cost: 0,
  user_id: 1,
  author: "SQLBolt",
  description: "This SQLBolt introduction is a series of interactive lessons and exercises designed to help you quickly learn SQL right in your browser."
)
Resource.create(
  url: "https://egghead.io/courses/start-learning-react",
  name: "Start Learning React",
  resource_type: :tutorial,
  format: :video,
  difficulty: :intermediate,
  cost: 0,
  user_id: 2,
  author: "Joe Maddalone",
  description: "This series will explore the basic fundamentals of React to get you started."
)
Resource.create(
  url: "https://javascript30.com/",
  name: "JavaScript30",
  resource_type: :tutorial,
  format: :video,
  difficulty: :intermediate,
  cost: 0,
  user_id: 3,
  author: "Wes Bos",
  description: "Beginner to Intermediate developers and designers who want to become comfortable with both JavaScript fundamentals and working in the DOM without a library. 
  You should already know some JavaScript to start - This isn't a JavaScript 101 course. We learn by application - encountering many new situations while talking about the hows, 
  the whys and the whats that we use to solve them."
)

Review.create(
  title: "Scrimba is great!",
  body: "This tutorial was a great introduction to React. I thought Bob's explanations were very thorough and easy to understand. Scrimba offers a great interactive way to view and write code.",
  rating: 4,
  user_id: 1,
  resource_id: 1
)
Review.create(
  title: "Review of Mosh Node/Express Tutorial",
  body: "Mosh does a great job of explaining the basics of Node. He has a full series of Node videos so I would check those out as well. Overall I enoyed this tutorial and feel like it is a great intro to Node with Express.",
  rating: 3,
  user_id: 1,
  resource_id: 2
)
Review.create(
  title: "Simple and straight to the point",
  body: "I thought this was a great 'How to' tutorial. Not too much explanation about the how and why things happen but great for getting a RESTful API up and running with Node and PostgreSQL.",
  rating: 4,
  user_id: 1,
  resource_id: 3
)
Review.create(
  title: "Straight forward SQL Introduction",
  body: "Works as intended and will give you a quick jumpstart into writting SQL queries.",
  rating: 3,
  user_id: 1,
  resource_id: 4
)
Review.create(
  title: "Little fast and loose for me",
  body: "I am a bit of a noob when it comes to JS. This tutorial may be good for some but I felt it moved a little too fast for me. There were also some JS concepts that I wasn't familiar with and felt I should know before tacking this tutorial.",
  rating: 2,
  user_id: 1,
  resource_id: 5
)
Review.create(
  title: "Great variety",
  body: "I have only worked on a few of the tutorials in this series but find them very easy to understand and follow. Not sure how I will use these in my everyday JS coding but looking forward to it. Wes does a great job of explaining the concepts for beginners.",
  rating: 4,
  user_id: 1,
  resource_id: 6
)

Tag.create(name: "Ruby")
Tag.create(name: "JavaScript")
Tag.create(name: "Ruby on Rails")
Tag.create(name: "React")
Tag.create(name: "Vue")
Tag.create(name: "PostgreSQL")
Tag.create(name: "Java")
Tag.create(name: "JS")
Tag.create(name: "Python")
Tag.create(name: "Angular")
Tag.create(name: "Node")
Tag.create(name: "Express")
Tag.create(name: "C+")
Tag.create(name: "C++")
Tag.create(name: "C#")
Tag.create(name: "Lisp")
Tag.create(name: "Rust")
Tag.create(name: "SQL")
Tag.create(name: ".NET")
Tag.create(name: "Elixir")
Tag.create(name: "PHP")
Tag.create(name: "HTML")
Tag.create(name: "Bootstrap")
Tag.create(name: "CSS")
Tag.create(name: "Algorithms")

Tagging.create(tag_id: 2, resource_id: 1)
Tagging.create(tag_id: 4, resource_id: 1)
Tagging.create(tag_id: 10, resource_id: 2)
Tagging.create(tag_id: 11, resource_id: 2)
Tagging.create(tag_id: 6, resource_id: 3)
Tagging.create(tag_id: 11, resource_id: 3)
Tagging.create(tag_id: 18, resource_id: 4)
Tagging.create(tag_id: 14, resource_id: 5)
Tagging.create(tag_id: 2, resource_id: 6)
Tagging.create(tag_id: 22, resource_id: 6)

# Resource.create(url: "javascript.com", name: "javascript tutorials togo", resource_type: :tutorial, format: :text, difficulty: :beginner, cost: 4, user_id: 7, tag_ids: [2, 4, 7])
# Resource.create(url: "rubytutorials.com", name: "Really cool Ruby tutorials", resource_type: "tutorial", format: "video", difficulty: "intermediate", cost: 4, user_id: 7, tag_ids: [1, 3])
# Resource.create(url: "c+tutorials.com", name: "Really cool C+ tutorials", resource_type: :channel, format: :video, difficulty: :advanced, cost: 2, user_id: 7, tag_ids: [11, 21])
# Resource.create(url: "sqltutorials.com", name: "Really cool SQL tutorials", resource_type: :deep_dive, format: :text, difficulty: :intermediate, cost: 2, user_id: 7, tag_ids: [16])
