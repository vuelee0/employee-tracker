const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        
        user: 'root',
        // Your MySQL password
        password: 'Greenmoon22@@',
        database: 'employeedb'
    },
    console.log('Connected to the employeedb database.')
);

module.exports = db;