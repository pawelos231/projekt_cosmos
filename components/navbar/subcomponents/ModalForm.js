import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/Form.module.sass";
import { useState } from "react";
import { motion } from "framer-motion";

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
    e.preventDefault();
    if (message !== "" && email !== "" && name !== "" && lastName !== "") {
      const DatabaseUserInformation = {
        firstName: name,
        lastName: lastName,
        email: email,
        message: message,
      };
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

      localStorage.setItem("name", "data");
    }
  };
  const handleClose = () => {
    if (localStorage.getItem("name") === "dataa") {
      setTimeout(() => {
        let btn = document.getElementById("Form_FormButtonSend__e4AVa");
        btn.disabled = false;
      }, 100);
    }
  };

  handleClose();
  return (
    <>
      <motion.div
        className={styles.FormModal}
        onClick={HandleModalVisibility}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></motion.div>
      <motion.h1 className={styles.h1Style} exit={{ y: -1000 }}></motion.h1>
      <motion.form
        className={styles.Form}
        exit={{ y: -1000 }}
        initial={{ y: -2000 }}
        animate={{ y: 0 }}
      >
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={HandleOnNameChange}
        />
        <input
          type="text"
          placeholder="Last Name..."
          value={lastName}
          onChange={HandleOnLastNameChange}
        />
        <input
          type="email"
          placeholder="Your Email address"
          value={email}
          onChange={HandleOnEmailChange}
        />
        <textarea
          id={styles.textAreaHolder}
          type="text"
          placeholder="message..."
          value={message}
          onChange={HandleOnMessageChange}
        />
        <button id={styles.FormButtonSend} onClick={handleSubmit}>
          Send
        </button>
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
