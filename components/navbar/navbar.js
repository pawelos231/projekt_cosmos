import styles from "../../styles/navbar.module.sass";
import Link from "next/link";
import SwitchDarkMode from "./switchDarkMode";
import { useState } from "react";
import ModalForm from "./subcomponents/ModalForm";
import { AnimatePresence } from "framer-motion";
const NavBar = ({ isOn }) => {
  const [form, setForm] = useState(false);

  const HandleModalVisibility = async () => {
    setForm(!form);
  };
  const HandleModalVisibilityKeyHandle = (e) => {
    if (e.keyCode === 13 && !form) {
      setForm(!form);
    } else if (e.keyCode === 27 && form) {
      setForm(!form);
    }
  };
  setTimeout(() => {
    window.addEventListener("keydown", HandleModalVisibilityKeyHandle);
  }, 20);

  return (
    <>
      <nav
        className={
          form === false
            ? `${styles.navigation} ${styles.navigationActive}`
            : styles.navigation
        }
        data-isOn={isOn}
      >
        <ul>
          <Link href="/">
            <li id={styles.mainSite}>BotPrzemekXD</li>
          </Link>
          <Link href="/posts/first-post">
            <li>about me</li>
          </Link>

          <Link href="/gallery">
            <li>Galery</li>
          </Link>
          <li>Colab</li>
          <li>My projects</li>
        </ul>
        <button id={styles.buttonStyleStart} onClick={HandleModalVisibility}>
          Message me
        </button>
        <AnimatePresence>
          {form && (
            <ModalForm
              isOn={isOn}
              setForm={setForm}
              form={form}
              HandleModalVisibility={HandleModalVisibility}
            />
          )}
        </AnimatePresence>
        <SwitchDarkMode />
      </nav>
    </>
  );
};

export default NavBar;
