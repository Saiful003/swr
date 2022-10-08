import nodemailer from "nodemailer";
export const sendOtpViaMail = async (email, otp) => {
  // create transporter

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // mail options
  let mailOptions = {
    from: `"Fred Foo 👻" <${process.env.MAIL_PASSWORD}>`,
    to: email,
    subject: "Nodemailer Project",
    text: `Hi from your nodemailer project ${otp}`,
  };

  // send mail
  return transporter.sendMail(mailOptions);
};
