import Image from "next/image";
import styles from "../../styles/Omnie.module.sass";
import AuthorFace from "../../public/New Project (2).png";
const Omnie = ({ isOn }) => {
  return (
    <section className={styles.MainSectionAboutMe}>
      <Image
        className={styles.imageSize}
        src={AuthorFace}
        alt="Picture of the author"
        width={400}
        height={750}
        layout="fixed"
      ></Image>
      <div>
        <h2>About me</h2>
        <p data-ison={isOn}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque
          fugiat fugit alias numquam sit saepe repudiandae, cupiditate
          repellendus, eius sequi eaque voluptate atque dolorum voluptatem
          facere. Impedit, ab eius.
        </p>
      </div>
    </section>
  );
};

export default Omnie;
