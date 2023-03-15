# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Folder.destroy_all

caleigh = User.create(first_name: "Caleigh", last_name: "Steill", email: "caleighsteill@outlook.com", username: "cmoney", password: "Password123", password_confirmation: "Password123")
chris = User.create(first_name: "Chris", last_name: "Santander", email: "chris@elevow.com", username: "chris", password: "Password123", password_confirmation: "Password123")

Folder.create(name: "Rails", user_id: caleigh.id, description: "Rails resources", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gn_XA-yIJASlTbV8o1s6nU9cDEpglYiIQvl9rGEqmw_DE7JsO62PUHz2yXEQtKUdzTE&usqp=CAU")
Folder.create(name: "React", user_id: caleigh.id, description: "React resources", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gn_XA-yIJASlTbV8o1s6nU9cDEpglYiIQvl9rGEqmw_DE7JsO62PUHz2yXEQtKUdzTE&usqp=CAU")
Folder.create(name: "JavaScript", user_id: caleigh.id, description: "JS resources", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gn_XA-yIJASlTbV8o1s6nU9cDEpglYiIQvl9rGEqmw_DE7JsO62PUHz2yXEQtKUdzTE&usqp=CAU")



