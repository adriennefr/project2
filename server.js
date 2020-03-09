let exphbs = require("express-handlebars");
let express = require("express");


// Local Variables
let PORT = process.env.PORT || 8080;
let app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Middlewear Setup: Express
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine: Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });