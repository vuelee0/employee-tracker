// const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');



// // PORT designation and app expression
// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());



function startPrompt() {
    inquirer.prompt({
        name: 'empData',
        type: 'list',
        message: "Choose from the following options to view, add or update the employee's data.",
        choices: [
            'View all Departments',
            'View all Roles',
            'View all Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update Employee Role',
            'Exit'
        ]
    })
};



// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    // app.listen(PORT, () => {
    //     console.log(`Server running on port ${PORT}`);
    // });
    startPrompt();
});