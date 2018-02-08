var path = require('path');

module.exports = function(app) 
{
// // route for home page
  app.get('/', function (req, res) 
  {
      res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
  //route survey page)
  app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // catch all
  app.use(function (req, res) 
  {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};

