let exphbs = require("express-handlebars");
let express = require("express");
let db = require("./models");
let sequelize = require("sequelize");


// Local Variables
let PORT = process.env.PORT || 8080;
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

// Middlewear Setup: Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(routes(app));

// Template Engine: Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/api-routes")(app);

// Server Listening
db.User.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
  });
});

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });

