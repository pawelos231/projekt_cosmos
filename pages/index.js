import styles from "../styles/homePage.module.sass";
import HeaderText from "../components/Header/HeaderText";
import Offers from "../components/RevievSection/Offers";
import Aboutme from "../components/AboutMeSection/Aboutme";
import Testimonial from "../components/Testimonial/Testimonial";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";
import GalleryComponent from "../components/Gallery/GalleryComponent";
export default function Home({ isOn }) {
  return (
    <>
      <div data-ison={isOn} className={styles.mainContainer}>
        <HeaderText isOn={isOn} />
        <Offers isOn={isOn} />
        <Articles isOn={isOn} />
        <Aboutme isOn={isOn} />
        <Testimonial isOn={isOn} />
        <GalleryComponent isOn={isOn} />
        <Footer isOn={isOn} />
      </div>
    </>
  );
}
