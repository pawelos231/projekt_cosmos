import styles from "../../styles/FooterComponent.module.sass";
const Footer = ({ isOn }) => {
  return (
    <footer data-ison={isOn} className={styles.MainFooterContainer}>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;
