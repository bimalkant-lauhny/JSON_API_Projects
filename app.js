var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//APIs
var timestampRouter = require('./routes/timestamp');
var whoAmI_Router = require('./routes/whoami');
var urlshortRouter = require('./routes/urlshort');
var imageAbsRouter = require('./routes/imageAbstraction');
var filemetadataRouter = require('./routes/fileMetadata');

//Projects
var drumKitRouter = require('./routes/drumKitRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.enable('trust-proxy');
app.set('trust-proxy', ['loopback', 'linklocal', 'uniquelocal']);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//APIs
// timestamp microservice
app.use('/api/timestamp', timestampRouter);

//request-header parser
app.use('/api/whoami', whoAmI_Router);

//URL-Shortener
app.use('/api/urlshortener/', urlshortRouter);

//Image search router
app.use('/api/imagesearch/', imageAbsRouter);

//File metadata
app.use('/api/filemetadata/', filemetadataRouter);

//Projects
//Drum Kit
app.use('/projects', drumKitRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
