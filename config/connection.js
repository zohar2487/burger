var mysql = require("mysql");

require("dotenv").config();

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
	var connection = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "burger_db"
	});
}

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadId);
});

module.exports = connection;