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

let table = [

]



app.get("/api/tables", function(req, res) {
    return res.json(table);
  });

  app.get("/input", function(req, res) {
    res.sendFile(path.join(__dirname, "input.html"));
  });



  app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    console.log(newTable);
  
    table.push(newTable);
  
    res.json(newTable);
  });