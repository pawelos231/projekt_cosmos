import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/navbar.module.sass";
const SwitchDarkMode = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <div className={styles.switch} data-ison={isOn} onClick={toggleSwitch}>
      <motion.div
        className={styles.handle}
        layout
        transition={spring}
        data-ison={isOn}
        onClick={toggleSwitch}
      />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default SwitchDarkMode;
