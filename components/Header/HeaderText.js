import styles from "../../styles/header.module.sass";
import Blob from "./Subcomponents/blob";
import BlobBlue from "./Subcomponents/BlobBlue";
import Aos from "aos";
import "aos/dist/aos.css";
const HeaderText = ({ isOn }) => {
  return (
    <>
      <header data-aos="zoom-in" data-ison={isOn} className={styles.mainText}>
        <h1>Strona o kosmosie</h1>
        <p>
          Witaj na stronie poświędconej głównie wszechświatowi! mam nadzieję że
          znajdziesz tu mnóstwo rzeczy które cię zainteresują i pozwolą poznać
          nowe niezmierzone granice tego jakże to pięknego i otaczającego nas z
          każdej strony kosmosu
        </p>
      </header>
      <Blob />
      <BlobBlue />
    </>
  );
};

export default HeaderText;
