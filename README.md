# JA CONNECT		

## Description

_Duration: 3 ½ Week Sprint_


Junior Achievement KC has an amazing operation that sets out to help kids become financially literate, develop an entrepreneurial mindset, and become career-ready after their education is complete by way of local volunteers facilitating classes.  Currently, when a volunteer signs up they are then assigned a class to teach via email, and it is up to the volunteer to respond back to Junior Achievement KC when that class has been completed.  This has led to a lengthy process of emails and phone calls to collect completion details once classes have been completed by the volunteer.  We have set out to help streamline that process and make it more efficient for both the administrators and the volunteers of Junior Achievement KC by allowing volunteers to submit their completion data to administrators directly via the app. Administrators are able to manage volunteers, admins, classes, learning materials, and reporting data from the administrative part of the app.

As an administrator, I have the following options when using this application.  On the Reports page I am presented with all the information from pending classes and completed classes including class name, volunteer name, class attendance, and date of completed class.  On the Volunteer page I am able to easily enter a new volunteer and assign them their class and training to facilitate.  This will then send a registration email to the volunteer to register with their details which then accepts the assigned class.  I can also view all of my existing volunteers and their contact information for getting in touch should I need to go into further detail about their class or the content they will use.  On the Administrators page, I am able to easily view existing administrators’ contact info as well as the ability to add an additional administrative user similar to the Volunteer portion of the application. On the Classes/Training page I am able to see all the classes offered by Junior Achievement KC, or add in new classes should offerings be updated. In the Training tab I am also able to see all training resources offered, or add in new custom training resources depending on the class, the location, or the volunteer.  All pages on the admin side of the application will have the ability to export to csv as well.
 
As a volunteer I would first receive an email with the ability to register my account details-- once I have registered, I will be sent to the volunteer mobile dashboard which will display my classes, school details, and date of the class assigned to me by the administrators.  I will then click on the class of which I want to view.  I will then be able to see the training resources to review prior to my class, and also the completion form to complete once my class has ended. I’m able to enter in the class size, any pictures taken, and then confirm I have completed my class.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Installation

You will need an Amazon S3 account to store pictures.
Go to https://aws.amazon.com/free/storage/s3/ and click the `Get Started for Free` button.
Click the `Create a new AWS account` button
Fill in the registration form
Follow directions from this link https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html to set up a bucket. Pay particular attention to select the correct region and to allow public access.

1. Create a database named `ja_kc`,
2. The queries in the `init.sql` file are set up to create all the necessary tables and the queries in the `database.sql` file populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!


## Create database and table

Create a new database called `ja_kc` and create an `account_type` and a `users` table:

```SQL
CREATE TABLE "account_type"
(
   "id" SERIAL PRIMARY KEY,
   "title" VARCHAR(50) NOT NULL
);
CREATE TABLE "users"
(
   "id" SERIAL PRIMARY KEY,
   "username" VARCHAR(80) NOT NULL,
   "first_name" VARCHAR(80) NOT NULL,
   "last_name" VARCHAR(80) NOT NULL,
   "password" VARCHAR(1000) NOT NULL,
   "account_type_id" INT REFERENCES "account_type",
   "email" VARCHAR(80),
   "telephone" VARCHAR(20)
```

If you would like to name your database something else, you will need to change `ja_kc` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste these lines into the file:
 ```
 SERVER_SESSION_SECRET=superDuperSecret
AWS_ACCESS_KEY_ID=xxxxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxx

NODEMAILER_USER=AN_EMAIL_ADDRESS@gmail.com
NODEMAILER_PASSWORD=xxxxxxxxxxxxx
NODEMAILER_FROM=AN_EMAIL_ADDRESS@gmail.com
 ```
 While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

 You will also want to replace the template data for AWS and Nodemailer with your own unique data.
 - Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Usage


Registration:
1. To register, new admins/volunteers will follow the link sent to their email address, then fill out the registration form.
2. Users will then be taken to either the administrator portion of the app or the volunteer portion of the app based on which type of invitation they were sent.







Volunteers:
1. Volunteers will be taken to their homepage, where they can see the classes they are scheduled to teach.
2. Clicking on a class will take the volunteer to the class details page.
3. Once in the class details page, volunteers can click the icon next to program material to access links to learning materials for the class.
4. After completing the class volunteers can click the icon next to complete class and fill in and save the number of students in their class, as well as upload pictures if they have any.
5. Completion reports are submitted to the administrators upon clicking “save”, then the volunteer can go back to their homepage by using the “home” button in the menu.

Administrators:
1. Administrators will be taken directly to the reports page upon entering the application.
2. Counter Cards are present at the top of each page which will update data according to completed classes, in progress classes, total volunteers, and total students.
3. The navigation is present on the left of all pages which displays links for Reports, Volunteers, Administrators, and Classes/Training.
4. Export to CSV option is available on all pages.
5. Reports will be all generated analytics pertaining to an assigned class including name of volunteer assigned, school name, class title, then once the volunteer has completed the class, the number of students and date completed will generate.
6.  Volunteers will be all current volunteer names, along with pending volunteers in the system along with email, phone, and assigned classes.  There is a + button on the top right to be able to add in the email address of a new volunteer.  Once entered and submitted a pre-generated email along with a secure registration link will be sent to the email address provided.  Then the volunteer is able to complete registration and begin using the volunteer side of the application.  Once registered and in the system, the volunteer will go from “pending” to “current”.  A green + button is on each volunteer name and this allows you to assign a class to a volunteer.  This will then generate on the volunteer side of the app as an assigned class and those training materials will be linked in for the volunteer to review as well.
7. Administrators will be similar to the volunteers where there will be all current and pending administrators in the system along with their name, email, and phone number.  A plus button to add an admin on the right side will also send a secure link via email to a potential admin to register and be able to use the admin side of the application.
8. Classes and Trainings will be all present JA Classes offered with the ability to enter in a new class title along with adding any new links for training pdfs by simply clicking the + button on the right side of both the Classes tab and the Trainings tab.




## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App


## Built With

React, Redux, Redux-Saga, Typescript, Node.js, PostgreSQL, Nodemailer, Material-UI, react-spring, Amazon S3, Docker, Heroku 

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality. Special thanks to Junior Achievement of Greater Kansas City for giving us this opportunity to create something special with them.

