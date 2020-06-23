const functions = require("firebase-functions");

const config = functions.config();
const cors = require("cors")({ origin: true });
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",
  auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
  from: "Development ment",
  to: "email@gmail.com",
  subject: "Testing Nodemailer",
  text: "Test success",
};

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
