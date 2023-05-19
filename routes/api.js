const express = require('express');
const router = express.Router();
const Register = require("../controllers/Register");
const QuestionTwo = require("../controllers/Question_Two");

router.post('/register', function(req, res, next) {
    Register.Save(req, res, next);
});
router.post('/login', function(req, res, next) {
    Register.Login(req, res, next);
});

router.post('/suervey_2', function(req, res, next) {
    QuestionTwo.Save(req, res, next);
});


module.exports = router;
