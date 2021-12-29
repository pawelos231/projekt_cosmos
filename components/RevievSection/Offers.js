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
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={styles.mainTextOffers}>
        <h1 data-Aos="fade-up" data-isOn={isOn}>
          What am i offering?
        </h1>
        <p data-Aos="fade-up">Important Featurtes</p>
      </div>
      <section
        data-Aos="fade-up"
        className={styles.OffersContainer}
        data-isOn={isOn}
      >
        <article className={styles.OffersSection}>
          <div>
            <FastPerfomance />
            <h2>Fast perfomance</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              odit accusamus libero laudantium perferendis sunt eius ratione
              assumenda, dignissimos, animi dolorem! Iste rerum expedita
              laudantium fugiat, amet ad natus corrupti?
            </p>
          </div>

          <div>
            <PhoneCall />
            <h2>Always on the call</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              odit accusamus libero laudantium perferendis sunt eius ratione
              assumenda, dignissimos, animi dolorem! Iste rerum expedita
              laudantium fugiat, amet ad natus corrupti?
            </p>
          </div>

          <div>
            <People />
            <h2>Customer Support</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              odit accusamus libero laudantium perferendis sunt eius ratione
              assumenda, dignissimos, animi dolorem! Iste rerum expedita
              laudantium fugiat, amet ad natus corrupti?
            </p>
          </div>

          <div>
            <NewIdea />
            <h2>Open on new ideas</h2>
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
