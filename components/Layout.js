import { useEffect, useState } from "react";
import NavbarPhone from "./navbarComponent/subcomponents/navbarPhone";
import styles from "../styles/switchDarkMode.module.sass";
import { motion } from "framer-motion";
import Head from "next/head";
import NavBar from "./navbarComponent/navbar";
import Footer from "./Footer/Footer";
const Layout = ({ children, isOn, toggleSwitch }) => {
  const [size, setOnResize] = useState(false);
  const showMenu = () => {
    if (window.innerWidth > 720) {
      setOnResize(false);
    } else {
      setOnResize(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", showMenu);
    showMenu();
    console.log(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <title>Proffesional Web Design</title>

        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="keywords"
          content="Design, Photoshop, proffesional designer, designer, aftereffects, Professional designer"
        />
        <meta name="author" content="Przemysław Szymański" />
        <meta
          name="description"
          content="Website Containing my portfolio and things that i worked on, also presenting some of the revievs from my clients"
        />
      </Head>
      <div className={styles.switch} data-ison={isOn} onClick={toggleSwitch}>
        <motion.div
          className={styles.handle}
          layout
          transition={spring}
          data-ison={isOn}
          onClick={toggleSwitch}
        />
      </div>
      {size === false ? (
        <NavBar isOn={isOn} toggleSwitch={toggleSwitch} />
      ) : (
        <NavbarPhone isOn={isOn} />
      )}
      {children}
    </>
  );
};
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Layout;
