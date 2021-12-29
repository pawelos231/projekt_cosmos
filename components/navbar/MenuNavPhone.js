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
      data-isOn={isOn}
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      exit={{ x: -10000 }}
      transition={{ type: "linear" }}
    >
      <ul>
        <Link href="/posts/first-post">
          <li>about me</li>
        </Link>

        <Link href="/colors/white">
          <li>Galery</li>
        </Link>
        <li>Colab</li>
        <li>My projects</li>
        <Facebooksvg />
        <Twittersvg />
        <Message />
        <Youtube />
      </ul>
    </motion.nav>
  );
};

export default menuNavPhone;
