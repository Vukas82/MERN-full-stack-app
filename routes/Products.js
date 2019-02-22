const express = require('express');
const router = express.Router();
const dbProducts = require('../database/dbProducts');

const cors = require('cors');
const products = express.Router();


const Product  = require('../models/Product');

// const Gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
products.use(cors());

router.get('/', (req, res) => 
Product.findAll()
    .then(products => {
        console.log(products +'jebe');
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

// Get gig list
// router.get('/', (req, res) =>
//     Product.findAll()
//         .then(products => {
//             console.log(products);  //res.sendStatus(200);
//             res.render('products', {
//                 products:products
//             });
//         })
//         .catch(err => console.log(err)));


//         //Search for products
// router.get('/search', (req, res) => {
//     let { term } = req.query;

//     // Make lovercase because of search
//     term = term.toLowerCase();

//     Product.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
//     .then(products => res.render('products', { products }))
//     .catch(err => console.log(err));
// }); 

module.exports = router;