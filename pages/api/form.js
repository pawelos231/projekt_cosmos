import { PrismaClient } from "@prisma/client";
const nodemailer = require("nodemailer");
const prisma = new PrismaClient();
export default function HandleForm(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const parsedobj = JSON.parse(body);

    const FindIfPostExists = async () => {
      const Database = await prisma.contact.findFirst({
        where: {
          email: parsedobj.email,
        },
      });
      if (Database !== null) {
        return false;
      } else {
        return true;
      }
    };
    const sendMail = async () => {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "pawelossek@gmail.com",
          pass: "JebacPolicje123",
        },
        secure: true,
      });

      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
            resolve(success);
          }
        });
      });

      let mailOptions = {
        from: parsedobj.email, // sender address
        to: "pawellinek2@gmail.com", // list of receivers
        subject: parsedobj.lastName,
        text: `Hello my name is:${parsedobj.firstName} ${parsedobj.lastName} and my message to you is: ${parsedobj.message}                                                              And here is my email to contact me: ${parsedobj.email}`, // plain text body
      };
      // send mail with defined transport object
      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });
    };

    const bruh = async () => {
      if (await FindIfPostExists()) {
        const post = await prisma.contact.create({
          data: JSON.parse(body),
        });
        console.log(post);
      } else {
        console.log("podany email jest juz w bazie");
      }
    };
    res.status(200).json(JSON.parse(body));
    bruh();
    sendMail();
  }
}
