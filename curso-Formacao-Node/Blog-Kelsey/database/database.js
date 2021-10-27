const Sequelize = require('sequelize');

const connection = new Sequelize('blog','blog','Blx01extam',{
    host : '192.168.0.108',
    dialect : 'mysql'
});

module.exports= connection;