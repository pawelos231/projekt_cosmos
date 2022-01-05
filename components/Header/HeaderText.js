import styles from "../../styles/header.module.sass";
import Blob from "./Subcomponents/blob";
import BlobBlue from "./Subcomponents/BlobBlue";
const HeaderText = ({ isOn }) => {
  return (
    <>
      <header data-ison={isOn} className={styles.mainText}>
        <h1>Top Quality Photoshop Projects</h1>
        <p>
          Hi, my name is Przemek and i am a proffesional designer. I worked on
          various of projects, all of wchich are listed in my gallery. I would
          love to work with you, if you are intrested write to me in a form
          above!
        </p>
      </header>
      <Blob />
      <BlobBlue />
      <div data-ison={isOn} className={styles.InformationContainer}>
        TU BĘDZIE SIĘ COŚ ZNAJDYWAŁO ALE NIE MAM NA TO MATERIAŁÓW XD
      </div>
    </>
  );
};

export default HeaderText;
