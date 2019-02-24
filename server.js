var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5001;

const mysql = require('mysql')

// //database --------------------------------------------
const dbProducts = require('./database/dbProducts');

const dbNova = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '123456',
    database: 'productlist'
});

dbNova.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('UCITANA DBNOVA')
})

app.get('/createdb', (req, res) => {
    let sql = 'SELECT * FROM products';
    dbNova.query(sql, (err, result) => {
    if(err) 
        throw err;
        console.log(result);
        res.send(result);
    });
    
})
// test db
    // dbProducts.authenticate()
    // .then(() => {console.log('Database connected dobro je...')})
    // .catch((err) => console.log('Error: ' + err));
    //database --------------------------------------------


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

// var Users = require('./routes/Users')

//-----------------------------------------------------------
// app.get('/api/productlist', require('./routes/Products'));
// app.get('/products', (req, res) => {
//     const productList =  require('./routes/products') 
//     //  [
//     //     {id: 1, name: "xBox 360", price: "250"},
//     //     {id: 2, name: "Sony Playstation 4", price: "450"},
//     //     {id: 3, name: "Nintendo Switch", price: "150"},
//     //     {id: 4, name: "xBox 360", price: "250"},
//     //     {id: 5, name: "Sony Playstation 4", price: "450"},
//     //     {id: 6, name: "Nintendo Switch", price: "150"}
//     // ];
//     res.json(productList); //productList
// })

app.get('/products', (req, res) => {
    let sql = 'SELECT * FROM products';
    dbNova.query(sql, (err, result) => {
    if(err) 
        throw err;
        console.log(result);
        res.send(result);
        // const productList = result; // origim
        const products = result;

        // res.json(products); // origin
        res.json(products);

    });
    
})
// app.use('/productList', require('./routes/products'));

//-----------------------------------------------------------

app.use('/users', require('./routes/Users'));

// app.get('/', (req, res) => res.send('INDEX'));

app.listen(PORT, () => {
    console.log('Server is runing on port: ' + PORT)
});