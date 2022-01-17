import styles from "../../styles/Aboutme.module.sass";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Aboutme = ({ isOn }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      data-aos="fade-left"
      className={styles.AboutMeContainer}
      data-ison={isOn}
    >
      <iframe
        title="Showcase of some projects that i have worked on"
        className={styles.scrollablePhotos}
        src="https://nextjs.org/docs/getting-started"
      ></iframe>
      <div>
        <h2>Pokaz naszej pracy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum
          culpa consectetur sit ipsam error maiores sapiente repellat
          repellendus ipsum vel facilis ex praesentium voluptate quo, enim
          cupiditate omnis veniam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis iusto natus, error sequi sit harum odit
          eligendi animi asperiores ullam dolores. Ut nihil atque velit officiis
          aliquam impedit unde nesciunt! lorem
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
