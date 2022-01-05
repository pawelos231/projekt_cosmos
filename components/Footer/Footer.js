import styles from "../../styles/FooterComponent.module.sass";
const Footer = ({ isOn }) => {
  return (
    <footer data-ison={isOn} className={styles.MainFooterContainer}>
      <p>Footer</p>
      <p data-ison={isOn} className={styles.titlesOfFunctions}>
        Contact
        <p data-ison={isOn} className={styles.smallInformation}>
          Phone: 796343312
        </p>
        <p data-ison={isOn} className={styles.smallInformation}>
          Email: bambolejo@interia.com
        </p>
        <p data-ison={isOn} className={styles.smallInformation}>
          Nie wiem co tu napisać
        </p>
      </p>
      <p data-ison={isOn} className={styles.titlesOfFunctions}>
        Usefull links
        <p data-ison={isOn} className={styles.smallInformation}>
          google.com
        </p>
        <p data-ison={isOn} className={styles.smallInformation}>
          abcight.com
        </p>
        <p data-ison={isOn} className={styles.smallInformation}>
          facebook.com XD
        </p>
      </p>
      <p data-ison={isOn} className={styles.titlesOfFunctions}>
        Address
        <p data-ison={isOn} className={styles.smallInformation}>
          Ulica: nie powiem
        </p>
        <p data-ison={isOn} className={styles.smallInformation}>
          Miasto: L zabrze
        </p>
        <p data-ison={isOn} className={styles.smallInformation}>
          kraj: Rosja
        </p>
      </p>
    </footer>
  );
};

export default Footer;
