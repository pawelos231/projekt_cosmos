import { PrismaClient } from "@prisma/client";
import DatabaseUserInformation from "../../components/navbar/subcomponents/ModalForm";
const prisma = new PrismaClient();
export default function handler(req, res) {
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
    res.status(200).json(body);
    bruh();
  }
}
