const pgp = require('pg-promise')()
const db = pgp({
	user : 'postgres',
	password : 'password',
	host : '192.168.0.109',
	port : 5432,
	database : 'blog'
});

module.exports = db;
