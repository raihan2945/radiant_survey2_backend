const { users_model } = require("../models");
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

// exports.Save = async (req, res, next) => {
//   const errorHandler = (err) => {
//     return res.status(500).json({
//       success: false,
//       error: err,
//     });
//   };

//   console.log("user body is : ",req.body)

//   const userEmail = req.body?.email;

//   if (userEmail) {
//     res.status(500).json({
//       success: false,
//       message: "Email not sent",
//       // result: userInsertDetails,
//     });
//   }

//   let user = await users_model
//   .findOne({ where: { email: userEmail } })
//   .catch((error) => errorHandler(error));

//   // console.log("user is : ", user);

//   if (user) {
//     console.log("user is : ", user);
//    return res.json({
//       success: false,
//       message: "This email already exist",
//       // result: userInsertDetails,
//     });

//   }

//   const uniqueId = uId();

//   console.log("unique id is : ", uniqueId);

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "strokebd2022@gmail.com",
//       pass: "aejzyxkfynypajxb",
//     },
//   });

//   var mailOptions = {
//     from: "strokebd2022@gmail.com",
//     to: "moviemail1908@gmail.com",
//     // to: `${userEmail}`,
//     subject: "Strokebd 2022 secret code",
//     text: `Your secret code is : ${uniqueId}`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });

//   // console.log("BODY DATA IS : ", req.body)

//   let insert_data = req.body;

//   insert_data.code = uniqueId;

//   const userInsertDetails = await users_model
//     .create(insert_data)
//     .catch(errorHandler);

//   return res.status(200).json({
//     success: true,
//     result: {
//       message: "User is created",
//       result: userInsertDetails,
//     },
//     // result: userInsertDetails,
//   });
// };

exports.Save = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  console.log("BODY DATA IS : ", req.body);

  console.log("user body is : ", req.body);

  const userEmail = req.body?.email;

  if (!userEmail) {
    return res
    .status(200)
    .json({ success: false, message: "Please enter email address" });
  }

  let user = await users_model
    .findOne({ where: { email: userEmail } })
    .catch((error) => errorHandler(error));

  console.log("user is : ", user);

  if (user) {
    console.log("user is : ", user);
    return res
    .status(200)
    .json({ success: false, message: "This email already exist" });
  }

    const uniqueId = uId();

  console.log("unique id is : ", uniqueId);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "strokebd2022@gmail.com",
      pass: "aejzyxkfynypajxb",
    },
  });

  var mailOptions = {
    from: "strokebd2022@gmail.com",
    // to: "moviemail1908@gmail.com",
    to: `${userEmail}`,
    subject: "Strokebd 2022 secret code",
    text: `Your secret code is : ${uniqueId}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // console.log("BODY DATA IS : ", req.body)
  
  let insert_data = req.body;

  insert_data.code = uniqueId;

  const userInsertDetails = await users_model
    .create(insert_data)
    .catch(errorHandler);
  return res.status(200).json({
    success: true,
    result: userInsertDetails,
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
