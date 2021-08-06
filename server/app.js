require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('./config/db').connect();  
const logger = require('morgan');
const cors = require('cors')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//cors error fixed//
const corsOptions = {
    origin: 'http://localhost:3001', // Add url of frontend
    credentials: true };

app.use(cors(corsOptions));
//////////////////////

app.use('/', require('./routes/'));

module.exports = app;