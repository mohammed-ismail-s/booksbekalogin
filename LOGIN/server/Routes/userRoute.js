var express = require('express');
var router = express.Router();


var { mongoose } = require('./../Database/dbMongoose');
var { User } = require('./../Models/userModel');


//IIFE function saves user name and password only once. when we start server.
//Restart server doesnt store another users because database have unique constraints 
(function () {
    var user = new User({
        username: "mohammed",
        password: "mohammed",
        fullname: "mohammed ismail s"
    });
    user.save().then((data) => {
        console.log("Successfully Saved User Name and Password");
    }).catch((error) => {
        console.log("Unable Saved User Name and Password");
    });
})();


// router.get('/', (req, res) => {
//     res.render('index');
// });

router.post('/validate', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    User.find({ username: username, password: password }).then((data) => {
        if (!data) {
            res.status(404).send();
        }
        res.send({ fullname: data[0].fullname, _id: data[0]._id });
    }).catch((error) => {
        res.send({ error });
    });
});


module.exports = router  
