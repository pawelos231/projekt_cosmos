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
    }
    if (e.keyCode === 27 && form) {
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
            onClick={() =>
              HandleScrollToElement(".offers_mainTextOffers__JLATa")
            }
          >
            Oferta
          </li>

          <li
            onClick={() =>
              HandleScrollToElement(".Articles_containerForArticles__EQ_VB")
            }
          >
            Artykuły
          </li>

          <li
            onClick={() =>
              HandleScrollToElement(".Aboutme_AboutMeContainer__zL5xC")
            }
          >
            Pokaz prac
          </li>

          <li
            onClick={() =>
              HandleScrollToElement(".Testimonial_testimonialTital__Yf71q")
            }
          >
            Oceny klientów
          </li>
        </ul>
        <button id={styles.buttonStyleStart} onClick={HandleModalVisibility}>
          Napisz do nas
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
