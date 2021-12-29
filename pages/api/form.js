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
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "pawelossek@gmail.com", // generated ethereal user
          pass: "JebacPolicje123", // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      let mailOptions = {
        from: parsedobj.email, // sender address
        to: "pawellinek2@gmail.com", // list of receivers
        subject: parsedobj.lastName,
        text: `Hello my name is:${parsedobj.firstName} ${parsedobj.lastName} and my message to you is: ${parsedobj.message}                                                              And here is my email to contact me: ${parsedobj.email}`, // plain text body
      };
      // send mail with defined transport object
      await transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
          console.log(err);
        } else {
          console.log("Email sent Sucessufsdfds");
        }
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
