import "dotenv/config";
import nodemailer from "nodemailer";

/** mail sending controller */
async function sendEmail(req, res) {
  /** mail provider config */
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.AUTH_TOKEN,
    },
  });

  const { name, email, phone, message } = req.body;
  console.log(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  );

  /**
   *
   *
   * @param {RegExp} s string to be validated
   * @param {RegExp} p validation regular expression
   * @return {boolean} result
   */
  const validate = (s, p) => {
    const r = s.trim().match(p);
    console.log(r);
    if (r[0] == s) {
      return true;
    } else {
      return false;
    }
  };
  const nameReg = /([A-Z.a-z]{2,}\s?)+/;
  const emailReg = /^[\w.]+@(gmail\.com|yahoo\.com|outlook\.com|icloud\.com)$/;
  const phoneReg = /\+91(6|7|8|9)\d{9}$/;

  if (
    validate(name, nameReg) &&
    validate(email, emailReg) &&
    validate(phone, phoneReg)
  ) {
    if (message.trim().length < 10) {
      return res.status(500).json({
        status: "error",
        message: "Message must be at least 10 characters long.",
      });
    } else {
      /** mail options */
      const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: "connect@iskconnoida.org",
        subject: "New Message from Contact Form",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      };

      /** send mail */
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error:", error);
          res.status(500).json({
            status: "error",
            message: error.message,
          });
        } else {
          console.log("Email sent:", info.response);
          res.status(200).json({
            status: "success",
            message: "Email sent successfully.",
          });
        }
      });
    }
  } else {
    console.log("Error: Invalid data provided.");
    res.status(500).json({
      status: "error",
      message: "Invalid data provided.",
    });
  }
}

export default sendEmail;
