import styles from "../styles/homePage.module.sass";
import HeaderText from "../components/Header/HeaderText";
import Offers from "../components/RevievSection/Offers";
import Aboutme from "../components/AboutMeSection/Aboutme";
import Testimonial from "../components/Testimonial/Testimonial";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";
import Contact from "./contact";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import { useEffect, useState } from "react";
export default function Home({ isOn }) {
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
      <div data-ison={isOn} className={styles.mainContainer}>
        <HeaderText isOn={isOn} />
        <Offers isOn={isOn} />
        <Articles isOn={isOn} />
        <Aboutme isOn={isOn} />
        <Testimonial isOn={isOn} />
        <GalleryComponent isOn={isOn} />
        {size ? <Contact isOn={isOn} /> : null}
        <Footer isOn={isOn} />
      </div>
    </>
  );
}
