var express = require('express');
var app = express();
var http = require("http");
var PORT = 5000;
const events = require('events');
var fs = require("fs");
var server = http.createServer(handleRequest);
var notesData = require('../../../db/db.json');
// var index = require('../js/index');


// Routing 

function handleRequest(req, res) {
    var path = req.url;
    switch (path) {
    case "/":
        // Returns index.html
      return fs.readFile(__dirname + "/../../index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    case "/notes":
        // Returns notes.html
      return fs.readFile(__dirname + "/../../notes.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    default:
        // Default to home page set to index.html
      return fs.readFile(__dirname + "/../../index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
}

/*module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
      });

    app.post("/api/notes", function(req, res) {
    if (notesData.length < 5) {
        notesData.push(req.body);
        res.json(true);
    }
    });
}*/

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
  


