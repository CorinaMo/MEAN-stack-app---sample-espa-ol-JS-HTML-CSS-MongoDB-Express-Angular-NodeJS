const express = require('express');
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');

var db = require('./db');

// Conectar con la BD
db.connect('mongodb://localhost:27017/apidb', function (err) {
    if (err) {
        throw ('Fallo en la conexión con la BD');
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');  
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');  
    next();  
  }); 

app.use('/', indexRouter);
app.use('/apidb/users', usersRouter);

module.exports = app;
