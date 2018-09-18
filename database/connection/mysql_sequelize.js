var Sequelize = require('sequelize');

var sequelize = new Sequelize('bd_financiero', 'ric_pato', 'Elpato.06', {
      host: 'localhost',
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      port:    3306 // or 5432 (for postgres)
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;


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

