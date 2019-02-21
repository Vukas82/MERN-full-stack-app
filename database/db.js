const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('nodejs_login1', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


//--------------------------



// const Sequelize = require('sequelize');
// module.exports = new Sequelize('nodejs_login1', 'root', '123456', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });