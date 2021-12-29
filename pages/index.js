import styles from "../styles/homePage.module.sass";
import HeaderText from "../components/Header/HeaderText";
import Offers from "../components/RevievSection/Offers";
import Aboutme from "../components/AboutMeSection/Aboutme";
import Omnie from "../components/OmnieSekcja/Omnie";
export default function Home({ isOn }) {
  return (
    <>
      <div data-ison={isOn} className={styles.mainContainer}>
        <Omnie isOn={isOn} />
        <HeaderText isOn={isOn} />
        <Offers isOn={isOn} />
        <Aboutme isOn={isOn} />
      </div>
    </>
  );
}
