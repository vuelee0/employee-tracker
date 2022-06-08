const db = require('../db/connection');
const cTable = require('console.table');



function viewDepartments() {
    db.query(
        `SELECT * FROM department`,
        function(err, results) {
            if(err) throw err;
            console.table(results);
        }
    );
};



module.exports = viewDepartments;