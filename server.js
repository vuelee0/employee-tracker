// const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startPrompt();
});


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
        if (answer.empData === 'View all Departments') {
            viewDepartments(startPrompt);
        }
        else if (answer.empData === 'View all Roles') {
            viewRoles(startPrompt);
        }
        else if (answer.empData === 'View all Employees') {
            viewEmployees(startPrompt);
        }
        else if (answer.empData === 'Add a Department') {
            addDepartment(startPrompt);
        }
        else if (answer.empData === 'Add a Role') {
            addRole(startPrompt);
        }
        else if (answer.empData === 'Add an Employee') {
            addEmployee(startPrompt);
        }
        // exit the application
        else if (answer.empData === 'Exit') {
            db.end();
        }
    })
};





// query to view all department table
function viewDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res);
        startPrompt();
    });
};

// query to view all roles table
function viewRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res);
        startPrompt();
    });
};

// query to view all employees table
function viewEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res);
        startPrompt();
    });
};

// query to add a department
function addDepartment() {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'Enter the department name:'
        }
    ])
    .then(response => {
        db.query('INSERT INTO department SET ?', { name: response.department }, (err, res) => {
            if(err) throw err;
            startPrompt();
        });
    })
};

// query to add a role
function addRole() {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the new role:'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary:'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Enter the department ID:'
        }
    ])
    .then(response => {
        db.query('INSERT INTO role SET ?', 
        { 
            title: response.title, 
            salary: response.salary, 
            department_id: response.department_id 
        }, 
        (err, res) => {
            if(err) throw err;
            startPrompt();
        });
    })
};

// query to add a employee
function addEmployee() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter first name:'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter last name:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the roles ID:'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Enter the managers ID:'
        }
    ])
    .then(response => {
        db.query('INSERT INTO employee SET ?', 
        { 
            first_name: response.first_name, 
            last_name: response.last_name, 
            role_id: response.role_id,
            manager_id: response.manager_id
        }, 
        (err, res) => {
            if(err) throw err;
            startPrompt();
        });
    })
};