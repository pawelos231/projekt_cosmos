import styles from "../../styles/FooterComponent.module.sass";
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
        <p className={styles.titlesOfFunctions} data-ison={isOn}>
          Address
          <p data-ison={isOn}>Ulica: nie powiem</p>
          <p data-ison={isOn}>Miasto: L zabrze</p>
          <p data-ison={isOn}>kraj: Rosja</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
