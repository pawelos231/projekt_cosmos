import styles from "../../styles/offers.module.sass";
import FastPerfomance from "./svgs/fastPerfomance";
import PhoneCall from "./svgs/PhoneCall";
import People from "./svgs/People";
import BlobOrange from "./svgs/BlobOrange";
import NewIdea from "./svgs/NewIdea";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Offers = ({ isOn }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className={styles.mainTextOffers}>
        <h1 data-aos="fade-up" data-ison={isOn}>
          Co Oferujemy
        </h1>
        <p data-aos="fade-up">Important Featurtes</p>
      </div>
      <section
        data-aos="fade-up"
        className={styles.OffersContainer}
        data-ison={isOn}
      >
        <article className={styles.OffersSection}>
          <div>
            <FastPerfomance />
            <h2>Przeloty na księżyc</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              odit accusamus libero laudantium perferendis sunt eius ratione
              assumenda, dignissimos, animi dolorem! Iste rerum expedita
              laudantium fugiat, amet ad natus corrupti?
            </p>
          </div>

          <div>
            <PhoneCall />
            <h2>Zawsze pod telefonem</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              odit accusamus libero laudantium perferendis sunt eius ratione
              assumenda, dignissimos, animi dolorem! Iste rerum expedita
              laudantium fugiat, amet ad natus corrupti?
            </p>
          </div>

          <div>
            <People />
            <h2>Wsparcie klienta</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              odit accusamus libero laudantium perferendis sunt eius ratione
              assumenda, dignissimos, animi dolorem! Iste rerum expedita
              laudantium fugiat, amet ad natus corrupti?
            </p>
          </div>

          <div>
            <NewIdea />
            <h2>Otwarci na pomysły</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              odit accusamus libero laudantium perferendis sunt eius ratione
              assumenda, dignissimos, animi dolorem! Iste rerum expedita
              laudantium fugiat, amet ad natus corrupti?
            </p>
          </div>
        </article>
      </section>
      <BlobOrange />
    </>
  );
};

export default Offers;
