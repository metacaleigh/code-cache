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
Blog.destroy_all
Taggable.destroy_all
Tag.destroy_all

caleigh = User.create(first_name: "Caleigh", last_name: "Steill", email: "caleighsteill@outlook.com", username: "cmoney", password: "Password123", password_confirmation: "Password123")
chris = User.create(first_name: "Chris", last_name: "Santander", email: "chris@elevow.com", username: "chris", password: "Password123", password_confirmation: "Password123")

f1 = Folder.create(name: "Rails", user_id: caleigh.id, description: "Rails resources", folder_color: "card w-96 h-40 bg-primary text-gray-900 my-1")
f2 = Folder.create(name: "React", user_id: caleigh.id, description: "React resources", folder_color: "card w-96 h-40 bg-secondary text-gray-900 my-1")
f3 = Folder.create(name: "JavaScript", user_id: caleigh.id, description: "JS resources", folder_color: "card w-96 h-40 bg-accent text-gray-900 my-1")

l1 = Link.create(link_name: "Active Record Basics", description: "This guide will get you started with Active Record models and persistence to the database.", link_url: "https://guides.rubyonrails.org/active_record_basics.html", is_starred: true)
l2 = Link.create(link_name: "Active Record Validations", description: "This guide teaches you how to validate the state of objects before they go into the database, using Active Record's validations feature.", link_url: "https://guides.rubyonrails.org/active_record_validations.html", is_starred: false)
l3 = Link.create(link_name: "Active Record Associations", description: "This guide covers all the associations provided by Active Record.", link_url: "https://guides.rubyonrails.org/association_basics.html", is_starred: false)
l4 = Link.create(link_name: "Active Record Migrations", description: "Migrations are a feature of Active Record that allows you to evolve your database schema over time.", link_url: "https://guides.rubyonrails.org/active_record_migrations.html", is_starred: true)


s1 = Snippet.create(snippet_name: "Header", description: "Header syntax", snippet: "<h1>Header</h1>", is_starred: false, language: "javascript")
s2 = Snippet.create(snippet_name: "Paragraph", description: "Paragraph syntax", snippet: "<p>Paragraph</p>", is_starred: true, language: "javascript")

n1 = Note.create(note_name: "Covention-over-Configuration", note: "A principle of Ruby-on-Rails, which refers to the act of adhering to the conventions outlined by the framework to minimize the amount of configuration that has to be done.", is_starred: false)
n2 = Note.create(note_name: "Gems", note: "Ruby gems are like the npm packages of Ruby.", is_starred: true)

Resource.create(folder_id: f1.id, resourceable_id: l1.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: l2.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: l3.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: l4.id, resourceable_type: "Link")
Resource.create(folder_id: f1.id, resourceable_id: s1.id, resourceable_type: "Snippet")
Resource.create(folder_id: f1.id, resourceable_id: s2.id, resourceable_type: "Snippet")
Resource.create(folder_id: f1.id, resourceable_id: n1.id, resourceable_type: "Note")
Resource.create(folder_id: f1.id, resourceable_id: n2.id, resourceable_type: "Note")

b1 = Blog.create(
    title: "Top 5 Websites Every Developer Must Know",
    description: "This article discusses the top 5 websites that every web developer should know about, including Stack Overflow, GitHub, CSS-Tricks, Smashing Magazine, and the Mozilla Developer Network. These websites provide a wealth of information, tutorials, and resources that can help developers stay up-to-date with the latest trends and technologies in web development.",
    article: "As a web developer, it is essential to keep yourself updated with the latest trends and technologies. With the plethora of resources available on the internet, it can be overwhelming to choose the right ones. In this article, we will discuss the top 5 websites that every web developer should know about.

    Stack Overflow:
    Stack Overflow is a question and answer website for programmers. It has a vast community of developers who ask and answer technical questions related to programming languages, frameworks, and tools. The website has a reputation system where users can gain points by asking and answering questions. This community-driven website is an excellent resource for developers to learn and share their knowledge.
    
    GitHub:
    GitHub is a web-based version control system used for software development. It is a platform where developers can collaborate on projects, share code, and contribute to open-source projects. GitHub is also a source of inspiration for developers to see what others are building and how they are building it. With its vast collection of code repositories, documentation, and resources, GitHub is a must-know for every web developer.
    
    CSS-Tricks:
    CSS-Tricks is a website dedicated to CSS tutorials, tips, and tricks. It provides practical advice on how to use CSS to solve common web design problems. The website also covers topics like HTML, JavaScript, and web development tools. CSS-Tricks is an excellent resource for developers who want to learn how to design and build beautiful and responsive websites.
    
    Smashing Magazine:
    Smashing Magazine is a website dedicated to web design and development. It provides articles, tutorials, and resources on topics like web design, front-end development, and UX design. Smashing Magazine also publishes books and hosts conferences for web designers and developers. This website is an excellent resource for developers who want to stay up-to-date with the latest trends in web development.
    
    Mozilla Developer Network:
    The Mozilla Developer Network is a website that provides documentation and resources for web developers. It covers topics like HTML, CSS, JavaScript, and web APIs. The website also provides interactive examples and code snippets to help developers learn and experiment. The Mozilla Developer Network is an excellent resource for developers who want to learn how to build web applications using open web standards.
    
    In conclusion, as a web developer, it is essential to keep yourself updated with the latest trends and technologies. These top 5 websites - Stack Overflow, GitHub, CSS-Tricks, Smashing Magazine, and the Mozilla Developer Network - are excellent resources that every web developer should know about. They provide a wealth of information, tutorials, and resources that can help developers stay ahead of the curve and build better web applications.",
    category: "Web Development",
    date: "2023-03-23"
    )

b2 = Blog.create(
    title: "Best Online Resources for Ruby on Rails",
    description: "This article provides a comprehensive list of the best online resources for Ruby on Rails, including official documentation, screencasts, newsletters, code repositories, and package managers, to help developers stay up-to-date with the latest trends and techniques in the field.",
    article: "Ruby on Rails is a popular web development framework that allows developers to create dynamic web applications quickly and easily. As a Ruby on Rails developer, it is important to stay up-to-date with the latest trends and techniques in the field. In this article, we will discuss the best online resources for Ruby on Rails.

    Ruby on Rails Guides:
    The Ruby on Rails Guides is an official documentation site that provides comprehensive guides on Ruby on Rails. These guides cover topics like getting started with Ruby on Rails, routing, controllers, models, views, databases, and deployment. The guides are well-written, easy to understand, and provide practical examples that help developers learn and apply the concepts.
    
    RailsCasts:
    RailsCasts is a website that provides screencasts on Ruby on Rails topics. It covers topics like debugging, testing, deployment, and best practices. Each screencast is between 5 and 20 minutes long and provides step-by-step instructions on how to implement the concepts. RailsCasts is an excellent resource for developers who want to learn Ruby on Rails quickly and efficiently.
    
    Ruby Weekly:
    Ruby Weekly is a weekly newsletter that provides the latest news, articles, and resources on Ruby on Rails. It covers topics like Ruby on Rails tutorials, tools, gems, and best practices. The newsletter is a great way for developers to stay up-to-date with the latest trends and techniques in the field.
    
    GitHub:
    GitHub is a web-based version control system that is widely used by Ruby on Rails developers. It is a platform where developers can collaborate on projects, share code, and contribute to open-source projects. GitHub is also a source of inspiration for developers to see what others are building and how they are building it. With its vast collection of code repositories, documentation, and resources, GitHub is an essential resource for Ruby on Rails developers.
    
    RubyGems:
    RubyGems is a package manager for the Ruby programming language. It provides a vast collection of open-source libraries and tools that Ruby on Rails developers can use to enhance their applications. RubyGems is an excellent resource for developers who want to save time and effort by using pre-existing libraries and tools.
    
    In conclusion, these online resources - Ruby on Rails Guides, RailsCasts, Ruby Weekly, GitHub, and RubyGems - are the best resources for Ruby on Rails developers. They provide comprehensive documentation, screencasts, newsletters, code repositories, and libraries that can help developers stay up-to-date with the latest trends and techniques in the field. By using these resources, Ruby on Rails developers can enhance their skills, save time and effort, and build better web applications.",
    category: "Ruby on Rails",
    date: "2023-03-25"
)


b3 = Blog.create(
    title: "Master the Coding Interview with These 5 Online Resources",
    description: "This article outlines the top 5 websites for coding interview prep, including resources such as coding challenges, competitions, solutions, explanations, and real-life experiences to help developers improve their coding skills and excel in coding interviews.",
    article: "Preparing for a coding interview can be a daunting task, but with the right resources, it can be a breeze. In this article, we will discuss the top 5 websites for coding interview prep.

    LeetCode:
    LeetCode is a popular website that provides a collection of coding challenges that are designed to help users prepare for coding interviews. It covers a wide range of topics like algorithms, data structures, databases, and system design. LeetCode also provides detailed solutions and explanations for each challenge, making it an excellent resource for beginners and experienced developers alike.
    
    HackerRank:
    HackerRank is a website that provides coding challenges and competitions that are designed to help users improve their coding skills. It covers topics like algorithms, data structures, databases, and machine learning. HackerRank also provides a leaderboard that allows users to compare their scores with other users, making it an excellent resource for competitive developers.
    
    Codewars:
    Codewars is a website that provides coding challenges that are designed to help users improve their coding skills. It covers topics like algorithms, data structures, and programming languages like Python, Java, Ruby, and JavaScript. Codewars also provides a unique ranking system that allows users to progress through the levels and earn badges as they complete challenges.
    
    Interview Cake:
    Interview Cake is a website that provides coding challenges that are specifically designed for coding interviews. It covers topics like algorithms, data structures, and system design. Interview Cake also provides detailed solutions and explanations for each challenge, making it an excellent resource for developers who want to learn how to approach coding interviews.
    
    GeeksforGeeks:
    GeeksforGeeks is a website that provides a wide range of resources for coding interview prep. It covers topics like algorithms, data structures, databases, and programming languages like C++, Java, and Python. GeeksforGeeks also provides interview experiences, which are real-life experiences shared by users who have gone through coding interviews, making it an excellent resource for developers who want to learn from the experiences of others.
    
    In conclusion, these online resources - LeetCode, HackerRank, Codewars, Interview Cake, and GeeksforGeeks - are the top 5 websites for coding interview prep. They provide coding challenges, competitions, rankings, solutions, explanations, and real-life experiences that can help developers improve their coding skills and prepare for coding interviews. By using these resources, developers can gain confidence, sharpen their skills, and excel in coding interviews.",
    category: "Interview Prep",
    date: "2023-03-27"
)

tag1 = Tag.create(tag_name: "#RailsDocs")

t1 = Taggable.create(taggable_type: "Link", taggable_id: l1.id, tag_id: tag1.id)
t2 = Taggable.create(taggable_type: "Link", taggable_id: l2.id, tag_id: tag1.id)
t3 = Taggable.create(taggable_type: "Link", taggable_id: l3.id, tag_id: tag1.id)
t4 = Taggable.create(taggable_type: "Link", taggable_id: l4.id, tag_id: tag1.id)
