import styles from "../../styles/navbar.module.sass";
import Link from "next/link";
import SwitchDarkMode from "./switchDarkMode";
import { useEffect, useState } from "react";
import ModalForm from "./subcomponents/ModalForm";
import { AnimatePresence } from "framer-motion";
const NavBar = ({ isOn }) => {
  const [form, setForm] = useState(false);

  const HandleModalVisibility = async () => {
    if (localStorage.getItem("BtnData") == "data") {
      setTimeout(() => {
        let btn = document.querySelector("#Form_FormButtonSend__e4AVa");
        console.log(btn);
        btn.disabled = true;
        btn.textContent = "Thanks";
      }, 30);
    }
    setForm(!form);
  };
  const HandleModalVisibilityKeyHandle = (e) => {
    if (e.keyCode === 13 && !form) {
      setForm(!form);
    } else if (e.keyCode === 27 && form) {
      setForm(!form);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", HandleModalVisibilityKeyHandle);
  }, []);
  const HandleScrollToElement = (elem) => {
    let aboutme = document.querySelector(elem);
    aboutme.scrollIntoView();
  };

  return (
    <>
      <nav
        className={
          form === false
            ? `${styles.navigation} ${styles.navigationActive}`
            : styles.navigation
        }
        data-ison={isOn}
      >
        <ul>
          <Link href="/">
            <li id={styles.mainSite}>Mysite</li>
          </Link>
          <li
            onClick={() => HandleScrollToElement(".Omnie_AboutMeText__q_BO0")}
          >
            About me
          </li>
          <li
            onClick={() =>
              HandleScrollToElement(".Testimonial_testimonialTital__Yf71q")
            }
          >
            Revievs
          </li>

          <Link href="/gallerySite">
            <li>Galery</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
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
