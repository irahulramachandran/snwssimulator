
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('env', 'production');
  app.set('case sensitive routing', false);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('sakhatech'));
  app.use(express.session({key: 'sakhatech',secret: '$@kh@tech'}));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.bodyParser({ keepExtensions: true, uploadDir: "uploads", limit: '50mb' }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
require('./routes/routes.js')(app)

app.listen(3000, function(){
  console.log(app.address().port+": Jarvis at your service sir !!!");
});
