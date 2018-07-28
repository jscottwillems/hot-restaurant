var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



var table = [];
var waitlist = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

 

  app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    console.log(newTable);

  if (table.length < 4) {
        table.push(newTable);
        res.json(newTable);

  } else {
      waitlist.push(newTable)
      res.json(newTable);
  }
   

  });

