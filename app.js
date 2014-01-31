var http = require('http');
var express = require('express.io');
var app = express();

//Setting the View
app.set('view engine', 'jade');
//Setting path to view files
app.set('views', 'templates');
//Setting media path
app.use('/static', express.static( 'static'));

http.createServer(app).listen(3000, function() {
 console.log('App listening on http://localhost:3000');
});