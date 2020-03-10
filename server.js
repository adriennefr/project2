let exphbs = require("express-handlebars");
let express = require("express");
let db = require("./models");
let sequelize = require("sequelize");
var session = require('express-session')


// Local Variables
let PORT = process.env.PORT || 8080;
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

// Middlewear Setup: Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({
  secret: 'keyboard cat',
}))
// app.use(routes(app));

// Template Engine: Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


let users = []
let doneUsers = []


io.on('connection', function (socket) {
  socket.on('questionAnswered', function(data) {
    // Find user in users array
    let index = users.findIndex(function (user) {
      return user.name === data.user
    });

    if( data.correct ) {
      users[index].score += 5;
    }

  });

  socket.on('gameFinished', function( data ) {
    let index = users.findIndex(function (user) {
      return user.name === data.user
    });

    doneUsers.push(users[index]);

    if( doneUsers.length >= 2) {
      let winner = {};

      if( doneUsers[0].score > doneUsers[1].score) {
        winner = doneUsers[0]
      } else {
        winner = doneUsers[1]
      }

      io.emit('finalScore', { winner: winner });

      // Clear out users
      users = [];
    }
  })

  socket.on('inlobby', function (data) {
    users.push({ name: data.name, score: 0});
    io.emit('inlobby',{ users: users });
  });

  socket.on('disconnect',function() {
  })
});

// Routes
require("./routes/api-routes")(app);

// Server Listening
db.User.sync().then(function() {
  server.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
  });
});
