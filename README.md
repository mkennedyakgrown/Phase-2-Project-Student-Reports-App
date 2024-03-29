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

__The Admin page__  has two functions: _Adding Students_ and _Searching Students_.

>To add a student, use the form inputs at the top of the page to write the student's __First and Last Name__, their __Email Address__, and use the checkboxes to select the __Classes they are enrolled in__.
After filling out the new student's information, click the __Add Student__ button at the bottom of the form to add the new student to the database. You should see the student's information card render at the bottom of the Admin page, as well as in their enrolled classes in the Reports page.
![Image](./media/Add_a_Student.gif)

>If you click the __Add Student__ button without filling out required information in the form, an alert will inform you of the missing information.

>To search for a student, use the text input in the __Search Students__ section. The student cards rendered below will automatically filter as you type. The search is not case sensitive, so your results will be the same whether you capitalize or not.
![Image](./media/Student_Search.gif)

>To view student reports, click on a Student Card, and it will accordion to display each of that student's class progress reports.
![Image](./media/Display_Student_Report.gif)

__The Reports page__ creates a text input field for every class and every student in each class. Dividers on the page will tell you which class you are editing.

>To write progress reports on the __Reports Page__, select the text input for the class or student you want to write for. Write what you want for their report, then save by either pressing _Enter_ on your keyboard or clicking the _Save_ buttons located at the top and bottom of the Reports page.
![Image](./media/Write_and_Save_Student_Report.gif)

## License
MIT License

Copyright (c) 2024 Matthew Kennedy
