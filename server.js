var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5001;

// //database --------------------------------------------
const dbProducts = require('./database/dbProducts');

// test db
    dbProducts.authenticate()
    .then(() => {console.log('Database connected dobro je...')})
    .catch((err) => console.log('Error: ' + err));
    // //database --------------------------------------------


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

// var Users = require('./routes/Users')

//-----------------------------------------------------------
// app.get('/api/productlist', require('./routes/Products'));
// app.get('/api/productList', (req, res) => {
//     const productList = [
//         // {id: 1, name: "xBox 360", price: "250"},
//         // {id: 2, name: "Sony Playstation 4", price: "450"},
//         // {id: 3, name: "Nintendo Switch", price: "150"}
//     ];
//     res.json(productList); //productList
// })
app.use('/productList', require('./routes/Products'));

//-----------------------------------------------------------

app.use('/users', require('./routes/Users'));

// app.get('/', (req, res) => res.send('INDEX'));

app.listen(PORT, () => {
    console.log('Server is runing on port: ' + PORT)
});