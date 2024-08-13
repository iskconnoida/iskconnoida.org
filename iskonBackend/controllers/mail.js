import nodemailer from "nodemailer";
import env from "dotenv";

env.config();

export async function sendEmail(req, res) {
  const { name, email, message } = req.body;

  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "New Message from Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
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
