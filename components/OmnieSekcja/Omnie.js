import Image from "next/image";
import styles from "../../styles/Omnie.module.sass";
import AuthorFace from "../../public/New Project (2).png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Omnie = ({ isOn }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className={styles.MainSectionAboutMe}
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className={styles.firstDiv}>
        <h2 className={styles.AboutMeText}>About me</h2>
        <p data-ison={isOn}>
          Hi, my name is Przemek, i am 18 years Old, i am a professional graphic
          designer with a lot of ambition and passion, you can always check my
          agllery if you want to see some of my best designs, you can also write
          to me in a message button above, i hope that we will be working
          together soon !
        </p>
      </div>
      <div className={styles.imageAndTextContainer}>
        <div className={styles.imageFace}>
          <Image
            className={styles.imageSize}
            src={AuthorFace}
            alt="Picture of the author"
            width={400}
            height={650}
            quality={70}
          ></Image>
          <div>
            <div>
              <h2 id={styles.red}>Ambitionous</h2>
              <p data-ison={isOn}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                nisi, officiis veritatis eligendi minima ducimus, in, laboriosam
                rem delectus mollitia quae
              </p>
            </div>
            <div>
              <h2 id={styles.blue}>Hardworking</h2>
              <p data-ison={isOn}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                nisi, officiis veritatis eligendi minima ducimus, in, laboriosam
                rem delectus mollitia quae
              </p>
            </div>
            <div>
              <h2 id={styles.orange}>Passion</h2>
              <p data-ison={isOn}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                nisi, officiis veritatis eligendi minima ducimus, in, laboriosam
                rem delectus mollitia quae
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Omnie;
