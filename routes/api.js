const express = require('express');
const router = express.Router();
const multer = require('multer');

const Register = require("../controllers/Register");
const QuestionTwo = require("../controllers/Question_Two");
const SurveryThree = require("../controllers/SurveryThree");

const signatureUpload = multer({ dest: 'public/uploads/signatures' });

// Set up Multer for file upload (profile photo)
const profileUpload = multer({ dest: 'public/uploads/profiles/', limits: { fileSize: 10 * 1024 * 1024 } });


router.post('/register', function(req, res, next) {
    Register.Save(req, res, next);
});
router.post('/login', function(req, res, next) {
    Register.Login(req, res, next);
});

router.post('/suervey_2', function(req, res, next) {
    QuestionTwo.Save(req, res, next);
});

// router.post('/suervey_3', function(req, res, next) {
//     SurveryThree.Save(req, res, next);
// });

// profileUpload.single('profile'),

router.post('/suervey_3', function(req, res, next) {
    SurveryThree.Save(req, res, next);
});


module.exports = router;
