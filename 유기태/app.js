//app.js...

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ingameRouter = require('./routes/ingame');

var app = express();

//DB setting...
mongoose.connect('mongodb+srv://7IEH:abcd1234@cluster0.e1tgp.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', function(){
    console.log('DB connected');
});
db.on('error',function(err){
    console.log('DB ERROR : ',err);
});

// view engine setup
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ingame', ingameRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
