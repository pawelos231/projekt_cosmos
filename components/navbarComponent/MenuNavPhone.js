import styles from "../../styles/navbarPhone.module.sass";
import Link from "next/link";
import Facebooksvg from "./svgs/facebooksvg";
import Twittersvg from "./svgs/twittersvg";
import Message from "./svgs/message";
import Youtube from "./svgs/youtube";
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
        <Link href="/posts/first-post">
          <li>oferta</li>
        </Link>

        <Link href="/colors/white">
          <li>kontakt</li>
        </Link>
        <li>artykuły</li>
        <li>kosmos</li>
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
