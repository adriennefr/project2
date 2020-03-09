let db = require("../models");
console.log(db.User);

let passport = require('./passport');

let path = require('path');
// Routes
// =============================================================
module.exports = function (app) {


    // HTML Routes

    app.get("/homepage", function (req, res) {
        res.render("homepage");
    });

    app.get("/lobby", function (req, res) {
        res.render("lobby");
    });

    app.get("/questions", function (req, res) {
        res.render("questions");
    });

    app.get("/results", function (req, res) {
        res.render("results");
    });

    // API Routes
    // =========================================================

    // Get User Route
    app.get("/api/user/:id", function (req, res) {
        let id = req.params.id
        
        db.User.findAll({
            where: {
                id: id
            }
        }).then(function (results) {
            
            res.json(results);
        });
    });

    // Sign Up Route, Create New User
    app.post("/api/user", async function (req, res) {

        let hashedPassword = await passport.create(req.body.password);
        let avatar = 'assets/images/avatar.jpg';
        // let avatar = 

        db.User.create({
            username: req.body.username,
            hash: hashedPassword.hash,
            salt: hashedPassword.salt,
            avatar: avatar,
            total_wins: req.body.total_wins

        }).then(function (results) {
            res.json(results);
        });
    });

    // Login Route, Verify User
    app.post("/api/user/username", function (req, res) {
        console.log(req.body)

        // let hashedPassword = create(req.body.password);
        let userName = req.body.username;

        db.User.findAll({
            where: {
                uesername: userName
            }
        }).then(function (results) {

            if (passport.verify(req.body.password, results.hash, results.salt)) {
                res.redirect("/homepage")
            } else {
                return res.status(404).end();
            };

        });
    });

    // Put method to Update Total Wins
    app.put("/api/user/:id", function (req, res) {

        // we use where to describe which objects we want to update
        db.User.update({
            totalWins: req.body.totalWins,
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (results) {
            res.json(results);
        })
            .catch(function (err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });



    // Delete method to Delete Account
    app.delete("/api/user/:id", function (req, res) {
        console.log("User ID:");
        console.log(req.params.id);
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });

};