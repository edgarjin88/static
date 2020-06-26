const functions = require("firebase-functions");

const config = functions.config();
const cors = require("cors")({ origin: true });
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// service: "gmail",
//   auth: {
//     user: config.user.email,
//     pass: config.user.password
//   }

let transporter = nodemailer.createTransport({
  port: 465,
  secure: true,
  host: "smtp.gmail.com",
  auth: { user: config.user.email, pass: config.user.password },
});

console.log("transporter");

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, message } = request.query;

    const mailOptions = {
      from: "Testemail@a.com",
      to: "Testemail@a.com",
      subject: "Testemail@a.com",
      html: `<p style="font-size: 16px"> From : ${name} </p>
     <p style="font-size: 16px"> Email : ${email} </p>
     <p style="font-size: 16px"> Message : ${message} </p>
     `,
    };
    response.set("Access-Control-Allow-Origin", "*");
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });

    const confirmMailOptions = {
      to: `${email}`,
      subject: "I received your message from Testemail@a.com",
      html: `
      <h3>Hi, thanks for contact me. I received the below message from you.  I will reply within 24 hours</h3>
      <hr/>
      <hr/>
      <p style="font-size: 16px"> From : ${name} </p>
     <p style="font-size: 16px"> Email : ${email} </p>
     <p style="font-size: 16px"> Message : ${message} </p>
      `,
    };

    transporter.sendMail(confirmMailOptions);
  });
});
