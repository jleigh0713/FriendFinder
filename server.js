

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friends = require('./app/data/friends.js');

var app = express();
var PORT = process.env.PORT || 3000; 

//makes static assets in the public folder available 
app.use(express.static('app/public'));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.text());


// Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(process.env.PORT || 3000, function() 
{
  console.log('App listening on PORT ' + PORT);
});  

 