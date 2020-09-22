var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    con.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", function (err, result){
        if (err) throw err;
        console.log("Table created");
    });
});