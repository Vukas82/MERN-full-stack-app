const Sequelize = require('sequelize');
const dbProducts = require('../database/dbProducts');

const Product = dbProducts.sequelize.define(
    'product',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)
module.exports = Product; 