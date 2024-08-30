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

export default sendEmail;
