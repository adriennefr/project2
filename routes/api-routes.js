let db = require("../models");
<<<<<<< HEAD
=======
console.log(db.User);
>>>>>>> 678caf978fbd4075a42a05a4c700db1120fe5234
let axios = require('axios')

let passport = require('./passport');

let path = require('path');
// Routes
// =============================================================
module.exports = function (app) {


    // HTML Routes

<<<<<<< HEAD
    app.get("/", function (req, res) {
        res.render('homepage');
    });

    app.get("/dashboard", function (req, res) {
        res.render('dashboard', { user:  req.session.user });
    });

    app.get("/lobby", function (req, res) {
        res.render("lobby", { user: req.session.user });
    });

    app.get("/questions", function (req, res) {
        res.render("questions", { user: req.session.user });
    });

    app.get("/resultsLose", function (req, res) {
        res.render("resultsLose");
    });

    app.get("/resultsWin", function (req, res) {
        res.render("resultsWin");
    });

    app.get('/login', function(req,res){
        res.render('login');
    })

    app.get('/signup', function(req,res){
        res.render('signup');
=======
    app.get("/homepage", function (req, res) {


        res.render('homepage');
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

    app.get('/login', function(req,res){
        res.sendFile(path.join(__dirname, '../public/login.html'))
>>>>>>> 678caf978fbd4075a42a05a4c700db1120fe5234
    })


    // API Routes
    // =========================================================

    // Get User Route
    app.get("/api/user/:id", function (req, res) {
        let id = req.params.id
<<<<<<< HEAD

=======
        
>>>>>>> 678caf978fbd4075a42a05a4c700db1120fe5234
        db.User.findAll({
            where: {
                id: id
            }
        }).then(function (results) {
<<<<<<< HEAD

=======
            
>>>>>>> 678caf978fbd4075a42a05a4c700db1120fe5234
            res.json(results);
        });
    });

    // Sign Up Route, Create New User

    app.post("/api/user", async function (req, res) {

        let hashedPassword = await passport.create(req.body.password);
        let avatar = 'assets/images/avatar.jpg';
<<<<<<< HEAD
        // let avatar =
=======
        // let avatar = 
>>>>>>> 678caf978fbd4075a42a05a4c700db1120fe5234

        db.User.create({
            username: req.body.username,
            hash: hashedPassword.hash,

            salt: hashedPassword.salt,
            avatar: avatar,
            total_wins: req.body.total_wins

<<<<<<< HEAD
        }).then(function (result) {
            console.log( result.username );
            req.session.user = {
                username: result.username,
                total_wins: result.total_wins,
                avatar: result.avatar
            }

            console.log( req.session )
            res.send({redirect: "/dashboard"})
        });
    });

    // Login Route, Verify User
    app.post("/api/user/username", function (req, res, next) {
        // let hashedPassword = create(req.body.password);
        let userName = req.body.username;

        db.User.findAll({
            where: {
                username: userName
            }
        }).then(function (results) {
            let result = results[0].dataValues

            console.log( result );

            passport.verify(req.body.password,result.salt, function(hash){
                if(result.hash === hash.hash){
                    req.session.user = {
                        username: result.username,
                        total_wins: result.total_wins,
                        avatar: result.avatar
                    }

                    res.json({ login: true });
                }else{
                    res.json({ login: false });
=======
        }).then(function (results) {
            res.send({redirect: "/homepage"})
        });
    });

    // Login Route, Verify User
    app.post("/api/user/username", function (req, res, next) {
        console.log(req.body)

        // let hashedPassword = create(req.body.password);
        let userName = req.body.username;

        db.User.findAll({
            where: {
                username: userName
            }
        }).then(function (results) {
            let result = results[0].dataValues
            passport.verify(req.body.password,result.salt, function(hash){
                if(result.hash === hash.hash){
                    res.redirect(303, '/homepage')
                }else{
                    res.send('Password Incorrect')
>>>>>>> 678caf978fbd4075a42a05a4c700db1120fe5234
                }
            })
            // if (passport.verify(req.body.password, result.hash, result.salt)) {
            //     console.log('success!')
            //     res.redirect("/homepage")
            // } else {
            //     return res.status(404).end();
            // };
        }).catch(err=> {
            res.send(err)
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
