import { PrismaClient } from "@prisma/client";
const nodemailer = require("nodemailer");

export default async function HandleForm(req, res) {
  const prisma = new PrismaClient();
  if (req.method == "POST") {
    const body = req.body;
    const parsedobj = JSON.parse(body);
    console.log(parsedobj);
    const SendMail = async () => {
      let transporter = await nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "pawelossek@gmail.com", // generated ethereal user
          pass: "JebacPolicje123", // generated ethereal password
        },
      });
      let mailOptions = {
        from: `pawelossek@gmail.com`,
        to: `pawellinek3d@gmail.com`,
        subject: `Hi my name is ${parsedobj.firstName}`,
        text: `Hello my name is ${parsedobj.firstName} and i would like to write this massage to you: ${parsedobj.message}, here is my conatact ${parsedobj.email} `,
      };
      await transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("error oh my god", err);
        } else {
          console.log("EMAIL SENT!");
        }
      });
    };
    const bruh = async () => {
      const post = await prisma.contact.create({
        data: JSON.parse(body),
      });
      console.log(post);
      await SendMail();
    };
    await bruh();

    res.status(200).json({ name: "sexo" });
  }
}
