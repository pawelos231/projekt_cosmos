import styles from "../../../styles/navbarPhone.module.sass";
import Link from "next/link";
import Facebooksvg from "../svgs/facebooksvg";
import Twittersvg from "../svgs/twittersvg";
import Message from "../svgs/message";
import Youtube from "../svgs/youtube";
import { motion } from "framer-motion";
const menuNavPhone = ({ isOn }) => {
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
        <Link href="/">
          <li>Main Site</li>
        </Link>
        <Link href="/gallerySite">
          <li>Galeria</li>
        </Link>

        <Link href="/contact">
          <li>Contact</li>
        </Link>
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
