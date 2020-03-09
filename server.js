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

server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});

let user1 = undefined;
let user2 = undefined;

io.on('connection', function (socket) {
  console.log('connection');
  let choice;

  socket.on('ingame', function(data) {
    switch(data.msg) {
      case 'choice':
        io.emit('ingame', {user:data.user, choice:data.choice});
        break;
    }
  });
  socket.on('inlobby', function (data) {
    console.log(user1);
    console.log(user2);
    if(user1 && user2) {
      console.log('wooops, already have two user');
      return;
    }
    console.log(data);
    if(!user1) {
      user1 = {name: data.name, socket: socket};
      socket.emit('inlobby',{msg:'you user1'});
    } else {
      user2 =  {name: data.name, socket: socket};
      socket.emit('inlobby',{msg:'you user2'});
      io.emit('inlobby',{msg:'start'});
    }
  });
  socket.on('disconnect',function() {
    if(user1 && user1.socket === socket) {
      console.log('user1 disconnected');
      user1 = undefined;
    } else if(user2 && user2.socket === socket) {
      user2 = undefined;
      console.log('user2 disconnected');
    }
  })
});