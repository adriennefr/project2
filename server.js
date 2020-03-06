let exphbs = require("express-handlebars");
let express = require("express");


// Local Variables
let PORT = process.env.PORT || 8080;
let app = express();

// Middlewear Setup: Express
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine: Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes: Will be set up in quizController.js
let routes = require("./controllers/quizController");

app.use(routes);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });