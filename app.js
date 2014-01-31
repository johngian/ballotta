var express = require('express.io');
var app = express()

app.http().io();

//Setting the View
app.set('view engine', 'jade');
//Setting path to view files
app.set('views', 'templates');
//Setting media path
app.use('/static', express.static( 'static'));

app.io.route('ready', function(req) {
  req.io.emit('change', {
    message: 'Sent event from :ready: route.'
  });
});

//View for Home page
app.get('/', function(req, res) {
 res.render('index');
});

app.listen(3000);
