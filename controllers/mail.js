import nodemailer from "nodemailer";
import env from "dotenv";

env.config();

export async function sendEmail(req, res) {
  const { name, email, phone, message } = req.body;

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
    html: `
    <div style="background-color: #202020; color: #fff; font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #ffffff;">New Contact Message</h2>
      <hr style="border: 1px solid #444;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1E90FF; text-decoration: none;">${email}</a></p>
      <p><strong>Phone No.:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p style="border-left: 4px solid #1E90FF; padding-left: 10px; color: #ffffff;">${message}</p>
      <br>
      <hr style="border: 1px solid #444;">
      <p style="color: #aaa; font-size: 12px;">Sent from the ISKCON Contact Form</p>
    </div>
  `,
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
