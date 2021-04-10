let aryFriends = require("../data/friends");


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(aryFriends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
      let closestMatch = findClosestMatch(req.body)
      aryFriends.push(req.body)
      res.json(closestMatch)
      
    // if () {
    // //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    // //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

    //should pass the obj from api post
   function findClosestMatch(objFriend) {
    let closestMatchIndex = -1
    let smallestDifference = 51
    for (let i = 0; i < aryFriends.length; i++) {
            let difference = 0
            //this loop is only to sum all the differences
            for (let j = 0; j < aryFriends[i].scores.length; j++) {
                const element = aryFriends[i].scores[j];
                difference += Math.abs(element - objFriend.scores[j])
            }
            if (difference < smallestDifference) {
                smallestDifference = difference;
                closestMatchIndex = i
            }
            
    }
    return aryFriends[closestMatchIndex]

};
};