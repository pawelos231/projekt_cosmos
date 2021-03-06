import styles from "../styles/FormSite.module.sass";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ isOn }) => {
  const [message, SetMessage] = useState("");
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [lastName, SetLastname] = useState("");

  const HandleOnNameChange = async (e) => {
    SetName(e.target.value);
    localStorage.setItem("BtnData", "");
    let btn = document.querySelector("#FormSite_FormButtonSend__86HwC");
    btn.disabled = false;
    btn.textContent = "Send";
  };
  const HandleOnLastNameChange = (e) => {
    SetLastname(e.target.value);
  };
  const HandleOnEmailChange = (e) => {
    SetEmail(e.target.value);
  };
  const HandleOnMessageChange = (e) => {
    SetMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    await e.preventDefault();
    localStorage.setItem("BtnData", "data");
    let btn = document.querySelector("#FormSite_FormButtonSend__86HwC");
    btn.style.transform = "scale(0.9)";
    if (message !== "" && email !== "" && name !== "" && lastName !== "") {
      const DatabaseUserInformation = {
        firstName: name,
        lastName: lastName,
        email: email,
        message: message,
      };
      if (localStorage.getItem("BtnData") == "data") {
        console.log(btn);
        btn.disabled = true;
        btn.textContent = "Thanks";
      }
      console.log(DatabaseUserInformation);
      setTimeout(() => {
        let h1 = document.querySelector(".FormSite_h1Style__xdxhe");
        let form = `Formularz się wysyła...`;
        h1.textContent = form;
      }, 20);

      const response = await fetch("/api/form", {
        method: "POST",
        body: JSON.stringify(DatabaseUserInformation),
      });
      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        let h1 = document.querySelector(".FormSite_h1Style__xdxhe");
        h1.textContent = "Dziękujemy za przesłanie formularza";
      }, 20);
    }
  };
  return (
    <div className={styles.modalContainer} data-ison={isOn}>
      <motion.div className={styles.FormModal}></motion.div>
      <form onSubmit={handleSubmit} className={styles.Form} data-ison={isOn}>
        <input
          required={true}
          type="text"
          placeholder="Name..."
          value={name}
          onChange={HandleOnNameChange}
        />
        <input
          required={true}
          type="text"
          placeholder="Last Name..."
          value={lastName}
          onChange={HandleOnLastNameChange}
        />
        <input
          required={true}
          type="email"
          placeholder="Your Email address"
          value={email}
          onChange={HandleOnEmailChange}
        />
        <textarea
          required={true}
          id={styles.textAreaHolder}
          type="text"
          placeholder="message..."
          value={message}
          onChange={HandleOnMessageChange}
        />
        <button id={styles.FormButtonSend}>Send</button>
        <p>wyrazam zgodę na wysłanie swoich danych:</p>
        <input type="checkbox" required={true} />
      </form>
    </div>
  );
};

export default Contact;
