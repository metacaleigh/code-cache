# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Folder.destroy_all
Link.destroy_all
Snippet.destroy_all
Link.destroy_all
Resource.destroy_all

caleigh = User.create(first_name: "Caleigh", last_name: "Steill", email: "caleighsteill@outlook.com", username: "cmoney", password: "Password123", password_confirmation: "Password123")
chris = User.create(first_name: "Chris", last_name: "Santander", email: "chris@elevow.com", username: "chris", password: "Password123", password_confirmation: "Password123")

f1 = Folder.create(name: "Rails", user_id: caleigh.id, description: "Rails resources", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gn_XA-yIJASlTbV8o1s6nU9cDEpglYiIQvl9rGEqmw_DE7JsO62PUHz2yXEQtKUdzTE&usqp=CAU")
f2 = Folder.create(name: "React", user_id: caleigh.id, description: "React resources", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gn_XA-yIJASlTbV8o1s6nU9cDEpglYiIQvl9rGEqmw_DE7JsO62PUHz2yXEQtKUdzTE&usqp=CAU")
f3 = Folder.create(name: "JavaScript", user_id: caleigh.id, description: "JS resources", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gn_XA-yIJASlTbV8o1s6nU9cDEpglYiIQvl9rGEqmw_DE7JsO62PUHz2yXEQtKUdzTE&usqp=CAU")

l1 = Link.create(link_name: "Active Record Basics", description: "This guide will get you started with Active Record models and persistence to the database.", link_url: "https://guides.rubyonrails.org/active_record_basics.html")
l2 = Link.create(link_name: "Active Record Validations", description: "This guide teaches you how to validate the state of objects before they go into the database, using Active Record's validations feature.", link_url: "https://guides.rubyonrails.org/active_record_validations.html")
l3 = Link.create(link_name: "Active Record Associations", description: "This guide covers all the associations provided by Active Record.", link_url: "https://guides.rubyonrails.org/association_basics.html")
l4 = Link.create(link_name: "Active Record Migrations", description: "
Migrations are a feature of Active Record that allows you to evolve your database schema over time.", link_url: "https://guides.rubyonrails.org/active_record_migrations.html")

s1 = Snippet.create(snippet_name: "Header", description: "Header syntax", snippet: "<h1>Header</h1>")
s2 = Snippet.create(snippet_name: "Paragraph", description: "Paragraph syntax", snippet: "<p>Paragraph</p>")

n1 = Note.create(note_name: "Phase 3 Lecture Notes", note: "blah blah blah blah blah")
n2 = Note.create(note_name: "Phase 5 Lecture Notes", note: "blah blah blah blah blah")

Resource.create(folder_id: f1.id, resourceable_id: l1.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: l2.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: l3.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: l4.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: s1.id, resourceable_type: "Snippet")
Resource.create(folder_id: f1.id, resourceable_id: s2.id, resourceable_type: "Snippet")
Resource.create(folder_id: f1.id, resourceable_id: n1.id, resourceable_type: "Note")
Resource.create(folder_id: f1.id, resourceable_id: n2.id, resourceable_type: "Note")



