const db = require('../db/connection');
const cTable = require('console.table');



function viewDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res);
        startPrompt();
    });
};



module.exports = viewDepartments;