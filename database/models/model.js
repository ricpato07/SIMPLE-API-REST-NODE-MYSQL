var Sequelize = require('sequelize');
var sequelize = require('../connection/mysql_sequelize');

const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

const Usuarios = sequelize.define('usuarios', {
    idusuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = {User,Usuarios};


