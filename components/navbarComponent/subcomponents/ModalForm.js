import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/Form.module.sass";
import { useState } from "react";
import { motion } from "framer-motion";
let count = 0;
let countS = 0;
const ModalForm = ({ form, setForm, HandleModalVisibility }) => {
  const [message, SetMessage] = useState("");
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [lastName, SetLastname] = useState("");
  HandleModalVisibility = () => {
    setForm(!form);
  };
  const HandleOnNameChange = async (e) => {
    SetName(e.target.value);
    localStorage.setItem("BtnData", "");
    let btn = document.querySelector("#Form_FormButtonSend__e4AVa");
    btn.disabled = false;
    btn.textContent = "Send";
    count++;
    console.log(count);
    if (name[0] !== undefined && count == 2) {
      SetName(name[0].toUpperCase());
    }
  };
  const HandleOnLastNameChange = (e) => {
    SetLastname(e.target.value);
    countS++;
    if (lastName[0] !== undefined && countS == 2) {
      SetLastname(lastName[0].toUpperCase());
    }
  };
  const HandleOnEmailChange = (e) => {
    SetEmail(e.target.value);
  };
  const HandleOnMessageChange = (e) => {
    SetMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    localStorage.setItem("BtnData", "data");
    let btn = document.querySelector("#Form_FormButtonSend__e4AVa");
    btn.style.transform = "scale(0.9)";
    e.preventDefault();
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
      setTimeout(() => {
        let h1 = document.querySelector(".Form_h1Style__7psHs");
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
        let h1 = document.querySelector(".Form_h1Style__7psHs");
        h1.textContent = "Dziękujemy za przesłanie formularza";
      }, 20);
    }
  };
  return (
    <>
      <motion.div
        className={styles.FormModal}
        onClick={HandleModalVisibility}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <motion.h1 className={styles.h1Style} exit={{ y: -1000 }}></motion.h1>
        </div>
      </motion.div>
      <motion.form
        onSubmit={handleSubmit}
        className={styles.Form}
        exit={{ y: "-150%" }}
        initial={{ y: "-150%" }}
        animate={{ y: 0 }}
      >
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
        <input type="checkbox" required={true} id={styles.checkbox} />
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.svgClose}
          onClick={HandleModalVisibility}
        />
      </motion.form>
    </>
  );
};

export default ModalForm;
