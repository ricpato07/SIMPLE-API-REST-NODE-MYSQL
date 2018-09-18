var express = require('express');
var router = express.Router();
var userModel = require("../database/models/user_model");
var model = require("../database/models/model");
var userSeqModel = require("../database/models/user_seq_model");

/* GET users listing. */
router.get('/', function (req, res) {
    res.render("index");
});

function getUsers(req, res) {
    userSeqModel.getUsers()
            .then(function (users) {
                res.send(users);
            });
}

router.get('/getUsers', function (req, res) {
//	userModel.getUsers(function (err, users){
//		res.send(users);
//	});

    getUsers(req, res);

});

router.post("/createUser/:jsonDatos", function (req, res) {
//    jsonDatos = JSON.parse(req.params.jsonDatos);
//    userModel.createUser(jsonDatos, function (err, results) {
//        if (err) {
//            res.send('respond with a resource ' + err.message);
//        } else {
//            res.send(results);
//        }
//    });
    jsonDatos = JSON.parse(req.params.jsonDatos);

    userSeqModel.createUser(jsonDatos)
            .then(function (user) {
                console.log("user");
                console.log(user);
                getUsers(req, res);
            })
            .catch(function (err) {
                console.log("error");
                console.log(err);
                console.log("error, original");
                console.log(err.original);
                res.status(500).send('respond with a resource ' + err.original);
            })

});

router.put("/updateUser/:jsonDatos", function (req, res) {
    jsonDatos = JSON.parse(req.params.jsonDatos);
//    userModel.updateUser(jsonDatos, function (err, results) {
//        if (err) {
//            res.send('respond with a resource ' + err.message);
//        } else {
//            res.send(results);
//        }
//    });
    userSeqModel.updateUser(jsonDatos, jsonDatos.user_id)
            .then(function (user) {
                console.log("user");
                console.log(user);
                getUsers(req, res);
            })
            .catch(function (err) {
                console.log("error, original");
                console.log(err.original);
                res.status(500).send('respond with a resource ' + err.original);
            })
});

router.delete("/deleteUser/:user_id", function (req, res) {
//    userModel.deleteUser(req.params.user_id, function (err, results) {
//        if (err) {
//            res.send('respond with a resource ' + err.message);
//        } else {
//            res.send(results);
//        }
//    });

    userSeqModel.deleteUser(req.params.user_id)
            .then(function (deleteUser) {
                console.log("deleteUser");
                console.log(deleteUser);
                getUsers(req, res);
            })
            .catch(function (err) {
                console.log("error, original");
                console.log(err.original);
                res.status(500).send('respond with a resource ' + err.original);
            });
});

module.exports = router;
