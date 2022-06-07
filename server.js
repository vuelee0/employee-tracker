const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');



function startPrompt() {
    inquirer.prompt()
}



// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    startPrompt();
});