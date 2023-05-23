# 14 Model-View-Controller (MVC): Tech Blog

## Deployed Link of Application

[Click me to see the magic!](https://infinite-waters-79215.herokuapp.com/)

## Description

In this assignment, the challenge is to build a CMS-style blog site similar to a wordpress site. Developers can publish their blog posts and comment on other developers' posts as well. This will be created from scratch then deployed to Heroku. This application takes a back-end and front-end to satisfied the user story with acceptance criteria. Back-end will be structure with using Model and Controller paradigm to use MySQL2 and Sequelize packages to connect to a database. Front-end will be structure with using Views and handlebars for the client side to show what the users' sees. This is good practices on creating a simple authentification with logins/logouts that saves to your local to understand what's happening. All example database are seeded at the time meaning format date will have the exact same dates.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Installations

These downloads are needed in order to run this application!

 - Visual Studio Code
 - Node.js
 - MYSQL

These Node Package Manager is what is needed to run the application!

 - connect-session-sequelize
 - dotenv
 - express
 - express-handlebars
 - express-session
 - handlebars
 - mysql2
 - sequelize
 - bcryptjs

## How to Run Application (If Cloning)

1. Clone the application then once you open the code in Visual Code, Open in Integrated Terminal by right clicking on server.js

2. In the terminal type "npm i" to install node packages that are required to run the application.

3. Make a connection to your SQL by typing in the terminal "mysql -u root -p" to log in into your MySQL account

4. Run this line of code to create the table "source db/schema.sql;"

5. In the terminal type "npm run seed" to seed your database

6. Finally type in terminal "npm start" to start on a localhost

## Walkthrough Video

![img](./assets/Demo.gif)

Full Video Link: [Click Here](https://drive.google.com/file/d/1ILAvR_yOqYgsD7bLOqbYetBR4v0weF2H/view)

## Credits

Contact and connect with me at my [Github](https://github.com/tigergiangnguyen)