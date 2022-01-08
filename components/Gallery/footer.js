import styles from "../../styles/FooterComponentGallery.module.sass";
import Facebooksvg from "../Footer/Subcomponents/facebooksvg";
import Youtube from "../Footer/Subcomponents/youtube";
import Message from "../Footer/Subcomponents/message";
import Twittersvg from "../Footer/Subcomponents/twittersvg";
const Footer = ({ isOn }) => {
  return (
    <footer data-ison={isOn} className={styles.MainFooterContainer}>
      <h1 className={styles.titleComp}>Footer</h1>
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
          <Youtube />
          <Facebooksvg />
          <Twittersvg />
        </p>
      </div>
      <div className={styles.SocialsContainer}>
        <Facebooksvg />
        <Twittersvg />
        <Youtube />
        <Message />
      </div>
    </footer>
  );
};

export default Footer;
