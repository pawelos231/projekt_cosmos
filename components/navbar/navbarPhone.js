import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/navbarPhone.module.sass";
import { useState } from "react";
import MenuNavPhone from "./MenuNavPhone";
import { motion, AnimatePresence } from "framer-motion";
const NavbarPhone = ({ isOn }) => {
  const [click, HandleClick] = useState(false);
  const handleOnClickHamburger = () => {
    HandleClick(!click);
  };
  return (
    <>
      <i
        onClick={handleOnClickHamburger}
        className={styles.navigationPhone}
        data-isOn={isOn}
      >
        <FontAwesomeIcon icon={click === false ? faBars : faTimes} />
      </i>
      <AnimatePresence>
        {click && <MenuNavPhone click={click} isOn={isOn} />}
      </AnimatePresence>
    </>
  );
};

export default NavbarPhone;
