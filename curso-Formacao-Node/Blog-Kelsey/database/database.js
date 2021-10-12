const Sequelize = require('sequelize');

const connection = new Sequelize('blog','blog','Blx01extam',{
    host : '192.168.0.123',
    dialect : 'mysql'
});

module.exports= connection;