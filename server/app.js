var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var adminRouter = require('./routes/admin');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin","*")//or specify a domain
//   res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
// })
// app.use(
//   cors({
//     origin:"http://127.0.0.1:3000",
//     credentials:true
//   })
// )
app.use('/', adminRouter);

app.listen(8000, (err) => { 
  console.log("running");
})