# Phase-2-Project-Student-Reports-App

## Overview
This is a one-page app that allows a user to write, save, and view progress reports for students in a school setting. They also can add students to the database, including classes the new student is registered in.

Future functionality is planned for full management (addition, deletion, and class enrollment changes) of students by admin, as well as similar class management. Multiple user logins, admin credentials, and online hosting are future goals, as well.


## Installation
To install this project:

1. Clone the GitHub repository:
```bash
git clone https://github.com/mkennedyakgrown/Phase-2-Project-Student-Reports-App
```

2. Navigate to the project directory:
```bash
cd Phase-2-Project-Student-Reports-App
```

3. Install project dependencies:
```bash
npm install
```

4. Start the json-server for the database, using Port 4000:
```bash
json-server --watch db.json --port 4000
```
- This is especially important, as the app will run on localhost:3000

5. Start the React application:
```bash
npm start
```

These instructions assume that Node.js, npm, and json-server are already installed on your system. If not, please install them before proceeding with the above steps.

## Usage
Once both the json-server and the app are running, all usage is done through the UI on the app's webpage.

There are three pages:
- Home
- Admin
- Reports

__The Admin page__  has two functions currently: _Adding Students_ and _Searching Students_.

>To add a student, use the form inputs at the top of the page to write the student's __First and Last Name__, their __Email Address__, and use the checkboxes to select the __Classes they are enrolled in__.
After filling out the new student's information, click the __Add Student__ button at the bottom of the form to add the new student to the database. You should see the student's information card render at the bottom of the Admin page, as well as in their enrolled classes in the Reports page.

>To search for a student, use the 

__The Reports page__ 

## License
Include the project's license information.
