import styles from "../../../styles/navbarPhone.module.sass";
import Link from "next/link";
import Facebooksvg from "../svgs/facebooksvg";
import Twittersvg from "../svgs/twittersvg";
import Message from "../svgs/message";
import Youtube from "../svgs/youtube";
import { motion } from "framer-motion";
const menuNavPhone = ({ isOn }) => {
  const HandleScrollToElement = (elem) => {
    let aboutme = document.querySelector(elem);
    aboutme.scrollIntoView();
  };
  return (
    <motion.nav
      className={styles.navigationPhoneMenu}
      data-ison={isOn}
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      exit={{ x: -10000 }}
      transition={{ type: "linear" }}
    >
      <ul>
        <li>Main Site</li>
        <li
          onClick={() => HandleScrollToElement(".offers_mainTextOffers__JLATa")}
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
        <div className={styles.mediaContainer}>
          <Facebooksvg />
          <Twittersvg />
          <Message />
          <Youtube />
        </div>
      </ul>
    </motion.nav>
  );
};

export default menuNavPhone;
