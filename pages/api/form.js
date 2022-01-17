import { PrismaClient } from "@prisma/client";
const nodemailer = require("nodemailer");

export default async function HandleForm(req, res) {
  const prisma = new PrismaClient();
  const body = req.body;
  const parsedobj = JSON.parse(body);
  console.log(parsedobj);

  /*const findOneEmail = async () => {
    let email = await prisma.contact.findFirst({
      where: {
        email: parsedobj.email,
      },
    });
    return email;
  };
  const findOneMailResult = await findOneEmail();*/
  const SendMail = async () => {
    function waitforme(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    for (let i = 0; i < 2; i++) {
      let transporter = nodemailer.createTransport({
        service: "hotmail",
        port: 465,
        secure: false,
        tls: {
          ciphers: "SSLv3",
        },
        auth: {
          user: `pawelosssek@hotmail.com`,
          pass: `JebacPolicje123`,
        },
      });
      let mailOptions = {
        from: `pawelosssek@hotmail.com`,
        to: `pawellinek3d@gmail.com, bp.graphics.contact@gmail.com`,
        subject: `Hi my name is ${parsedobj.firstName}`,
        text: `Hello my name is ${parsedobj.firstName} and i would like to write this massage to you: ${parsedobj.message}, here is my conatact ${parsedobj.email} `,
      };
      await waitforme(1000);
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("error oh my god", err);
        } else {
          console.log("EMAIL SENT!", data);
        }
      });
      await waitforme(200);
    }
  };
  const bruh = async () => {
    const post = await prisma.contact.create({
      data: JSON.parse(body),
    });
    console.log(post);
    await SendMail();
  };
  await bruh();
  res.status(200).json({ name: "SUCCESS" });
}
