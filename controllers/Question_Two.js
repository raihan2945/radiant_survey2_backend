const { QuestionTwo } = require("../models");
const { sequelize } = require("../models");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

const nodemailer = require("nodemailer");

const uId = () => {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};


exports.Save = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };



  let insert_data = req.body;

  console.log("body data is : ", insert_data)

  const questions = await QuestionTwo
    .create(insert_data)
    .catch(errorHandler);
  return res.status(200).json({
    success: true,
    result: questions,
  });
};

exports.Login = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  if (req.body.mobile_number == "") {
    return res
      .status(200)
      .json({ success: false, message: "Please enter your mobile number!" });
  } else {
    let user = await users_model
      .findOne({
        where: { mobile_number: req.body.mobile_number },
      })
      .catch((error) => errorHandler(error));
    if (user === null) {
      return res.status(200).json({
        success: false,
        message: "Your mobile number not found.",
      });
    } else {
      return res.status(200).json({
        success: true,
        result: user,
      });
    }
  }
};
