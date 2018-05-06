var express = require("express");
var router = express.Router();
// Import the model to use its database functions.
var db = require("../models/");

// router.get("/", function(req, res){
//     res.redirect("/burgers");
// });

router.get("/", function (req, res) {
    db.burgers.findAll()
    .then(function (dbburger) {
        var hbsObject = {burgers: dbburger};
        return res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    db.burgers.create({
        burger_name: req.body.burger_name
    }).then(function (dbburger) {
        console.log(dbburger);
            // Send back the ID of the new quote
            res.redirect("/");
        });
});

router.put("/burgers/update", function (req, res) {
    db.burgers.update(
        {
            devoured: true
        },{ 
            where: { id: req.body.burger_id}
        }
    ).then(function (dbburger) {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
