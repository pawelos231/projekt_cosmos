import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default function HandleForm(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    const bruh = async () => {
      const post = await prisma.contact.create({
        data: JSON.parse(body),
      });
      console.log(post);
    };
    res.status(200).json(JSON.parse(body));
    bruh();
  }
}
