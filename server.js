// const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');

const viewDepartments = require('./utils/view-data')



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
    .then(function(answer) {
        if (answer.action === 'View all Departments') {
            viewDepartments(startPrompt);
        }
    })
};



// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startPrompt();
});