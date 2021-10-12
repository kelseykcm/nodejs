const sequelize = require("sequelize");

const connection = new sequelize('guiaperguntas','root','MySql2019!',{
    host: '192.168.0.123',
    dialect : 'mysql'
});

module.exports = connection;