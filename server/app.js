require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('./config/db').connect();  
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', require('./routes/users'));

module.exports = app;