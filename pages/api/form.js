import { PrismaClient } from "@prisma/client";
const nodemailer = require("nodemailer");

export default async function HandleForm(req, res) {
  const prisma = new PrismaClient();
  if (req.method == "POST") {
    const body = req.body;
    const parsedobj = JSON.parse(body);
    console.log(parsedobj);
    const SendMail = async () => {
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          let transporter = nodemailer.createTransport({
            service: "hotmail",
            port: 465,
            secure: false,
            tls: {
              ciphers: "SSLv3",
            }, // true for 465, false for other ports
            auth: {
              user: `pawelosssek@hotmail.com`, // generated ethereal user
              pass: `JebacPolicje123`, // generated ethereal password
            },
          });
          let mailOptions = {
            from: `pawelosssek@hotmail.com`,
            to: `pawellinek3d@gmail.com`,
            subject: `Hi my name is ${parsedobj.firstName}`,
            text: `Hello my name is ${parsedobj.firstName} and i would like to write this massage to you: ${parsedobj.message}, here is my conatact ${parsedobj.email} `,
          };
          transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
              console.log("error oh my god", err);
            } else {
              console.log("EMAIL SENT!");
              flag = true;
            }
          });
        }, 1000);
      }
    };
    const bruh = async () => {
      await SendMail();
      const post = await prisma.contact.create({
        data: JSON.parse(body),
      });
      console.log(post);
    };
    await bruh();

    res.status(200).json({ name: "sexo" });
  }
}
//G$AM@2khMk3RJYS
