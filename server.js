var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5001;

// //database
// const db = require('./database/db');

// // test db
//     db.authenticate()
//     .then(() => {console.log('Database connected...')})
//     .catch((err) => console.log('Error: ' + err));




app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

// var Users = require('./routes/Users')

app.use('/users', require('./routes/Users'));

// app.get('/', (req, res) => res.send('INDEX'));

app.listen(PORT, () => {
    console.log('Server is runing on port: ' + PORT)
});