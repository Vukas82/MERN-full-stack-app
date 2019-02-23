// const Sequelize = require('sequelize');
// module.exports = new Sequelize('productlist', 'root', '123456', {
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

const Sequelize = require('sequelize');
const dbProducts = {};
const sequelize = new Sequelize('productlist', 'root', '123456', {
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

dbProducts.sequelize = sequelize;
dbProducts.Sequelize = Sequelize;

module.exports = dbProducts;