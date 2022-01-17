export default async function HandleForm(req, res) {
  /*const findOneEmail = async () => {
    let email = await prisma.contact.findFirst({
      where: {
        email: parsedobj.email,
      },
    });
    return email;
  };
  const findOneMailResult = await findOneEmail();*/
  function waitforme(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const bruh = async () => {
    await waitforme(2000);
  };
  await bruh();
  res.status(200).json({ name: "John Doe" });
}
