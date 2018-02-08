
// Creating routes to friends data
var friends = require('../data/friends.js');

module.exports = function (app) 
{
  // //api path to grab friends data and then responds with a json object showing the array of friends
  app.get('/api/friends', function (req,res) 
  {
      res.json(friends);
  });

  // Updates an array of friends array and sends back the json of the best matched friend
  app.post('/api/friends', function (req, res) 
  {
      // initiates a new friend which is the one filling out the form
      var newFriend = req.body;

      var bestMatch = {};

      for(var i = 0; i < newFriend.scores.length; i++) 
      {
        if(newFriend.scores[i] === "1 (Strongly Disagree)") 
        {
          newFriend.scores[i] = 1;
        } 
        else if(newFriend.scores[i] === "5 (Strongly Agree)") 
        {
          newFriend.scores[i] = 5;
        } 
        else 
        {
          newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
      }
     
      // Put new friend from survey in "database" array
      friends.push(newFriend);

      // return the best match friend
      res.json(bestMatch);
  });

};