import styles from "../../styles/FooterComponent.module.sass";
import Facebooksvg from "./Subcomponents/facebooksvg";
import Youtube from "./Subcomponents/youtube";
import Message from "./Subcomponents/message";
import Twittersvg from "./Subcomponents/twittersvg";
const Footer = ({ isOn }) => {
  return (
    <footer data-ison={isOn} className={styles.MainFooterContainer}>
      <h1 className={styles.titleComp}>Usefull Informations</h1>
      <div className={styles.containerfor}>
        <p data-ison={isOn} className={styles.titlesOfFunctions}>
          Contact
          <p data-ison={isOn}>Phone: 796343312</p>
          <p data-ison={isOn}>Email: bambolejo@interia.com</p>
          <p data-ison={isOn}>Nie wiem co tu napisać</p>
        </p>
        <p className={styles.titlesOfFunctions} data-ison={isOn}>
          Usefull links
          <p data-ison={isOn}>google.com</p>
          <p data-ison={isOn}>abcight.com</p>
          <p data-ison={isOn}>facebook.com XD</p>
        </p>
        <p className={styles.titlesOfFunctionsss} data-ison={isOn}>
          Socials
          <p data-ison={isOn}>Facebook</p>
          <p data-ison={isOn}>Youtube</p>
          <p data-ison={isOn}>Twitter</p>
          <Youtube isOn={isOn} />
          <Facebooksvg isOn={isOn} />
          <Twittersvg isOn={isOn} />
        </p>
      </div>
      <div className={styles.SocialsContainer}>
        <Facebooksvg isOn={isOn} />
        <Twittersvg isOn={isOn} />
        <Youtube isOn={isOn} />
        <Message isOn={isOn} />
      </div>
    </footer>
  );
};

export default Footer;
