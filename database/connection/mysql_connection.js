var connection = require("mysql").createConnection({
	host : "localhost",
	user : "ric_pato",// YOUR USER OF DB
	password : "Elpato.06"// YOUR PASSWORD DB
});

connection.connect();

connection.query("USE bd_financiero;");

module.exports = connection;


/**
*  Structure DB
*
CREATE DATABASE db_prueba;
USE db_prueba;
CREATE TABLE user(
user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(30)
);
*/

