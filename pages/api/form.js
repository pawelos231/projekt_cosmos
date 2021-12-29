import { PrismaClient } from "@prisma/client";

export default function HandleForm(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const body = req.body;
    const parsedobj = JSON.parse(body);
    console.log(parsedobj);

    const bruh = async () => {
      const post = await prisma.contact.create({
        data: JSON.parse(body),
      });
      console.log(post);
    };
    res.status(200).json({ name: "sexo" });
    bruh();
  }
}
