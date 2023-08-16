const { SurveyThree } = require("../models");
const { sequelize } = require("../models");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");
const fs = require("fs");

const nodemailer = require("nodemailer");

// const uId = () => {
//   // I generate the UID from two parts here
//   // to ensure the random number provide enough bits.
//   var firstPart = (Math.random() * 46656) | 0;
//   var secondPart = (Math.random() * 46656) | 0;
//   firstPart = ("000" + firstPart.toString(36)).slice(-3);
//   secondPart = ("000" + secondPart.toString(36)).slice(-3);
//   return firstPart + secondPart;
// };

const getRandomInt = () => Math.floor(Math.random() * (20 - 1 + 1) + 1);

exports.Save = async (req, res, next) => {
  // console.log("req file is : ", req?.file.buffer)

  // res.end()

  // return

  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  console.log("body is :::", req.body);

  const { name, mio_code, wish, signature, profile } = req.body;

  console.log("profile is :", profile)

  // Decode the Base64 image data
  let imageBuffer = null
  if (profile) {
    const base64Data = profile.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    if (!base64Data) {
      return res.status(400).json({ error: "Invalid profile image format" });
    }

    imageBuffer = Buffer.from(base64Data, "base64");
  }

  // Decode the Base64 image data
  const signatureBase64Data = signature?.replace(
    /^data:image\/(png|jpeg|jpg);base64,/,
    ""
  );
  if (!signatureBase64Data) {
    return res.status(400).json({ error: "Invalid signature image format" });
  }
  const signatureImageBuffer = Buffer.from(signatureBase64Data, "base64");

  // Generate a unique filename (e.g., using a timestamp)
  const profilePhoto = imageBuffer ? `${mio_code}_${name}_${getRandomInt()}${getRandomInt()}.jpeg` : "";
  const signaturePhoto = `${mio_code}_${name}_${getRandomInt()}${getRandomInt()}.jpeg`;

  console.log("image buffer is :", imageBuffer)

  // Save the image file to your desired directory
  if (profile && imageBuffer) {
    fs.writeFile(`public/uploads/profiles/${profilePhoto}`, imageBuffer, (err) => {
      if (err) {
        console.error("Error saving image:", err);
        return res.status(500).json({ error: "Failed to save image" });
      }
      console.log("image uploaded successfully");
    });
  }

  fs.writeFile(
    `public/uploads/signatures/${signaturePhoto}`,
    signatureImageBuffer,
    (err) => {
      if (err) {
        console.error("Error saving image:", err);
        return res.status(500).json({ error: "Failed to save image" });
      }
      console.log("image uploaded successfully");
    }
  );

  // return res.json({ message: 'Image uploaded and saved successfully' });

  let insert_data = {
    name: name,
    mio_code: mio_code,
    wish: wish,
    signature_photo: signaturePhoto,
    selfi_photo: profilePhoto,
  };


  const data = await SurveyThree.create(insert_data).catch(errorHandler);
  return res.status(200).json({
    success: true,
    result: data,
  });
};
