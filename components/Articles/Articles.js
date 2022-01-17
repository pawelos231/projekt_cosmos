import styles from "../../styles/Articles.module.sass";
import Aos from "aos";
import "aos/dist/aos.css";
const Articles = ({ isOn }) => {
  return (
    <>
      <section
        data-aos="fade-left"
        className={styles.containerForArticles}
        data-ison={isOn}
      >
        <h2 className={styles.tital}>Artykuły</h2>
        <article>
          <h2>Pozaziemne cywilizacje</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            inventore molestiae eligendi facilis, omnis, iure obcaecati nostrum
            eius ducimus nobis voluptatibus sit. Quis earum deserunt eius,
            aspernatur adipisci odio dicta. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum ab perspiciatis aperiam,
            doloribus fugit iusto magnam itaque consequuntur a natus alias unde,
            eligendi totam, vitae accusamus reprehenderit accusantium harum?
            Recusandae!
          </p>
        </article>
        <article>
          <h2>Czarne dziury</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            inventore molestiae eligendi facilis, omnis, iure obcaecati nostrum
            eius ducimus nobis voluptatibus sit. Quis earum deserunt eius,
            aspernatur adipisci odio dicta. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum ab perspiciatis aperiam,
            doloribus fugit iusto magnam itaque consequuntur a natus alias unde,
            eligendi totam, vitae accusamus reprehenderit accusantium harum?
            Recusandae!
          </p>
        </article>
        <article>
          <h2>Hipotetyczne gwiazdy kwarkowe</h2>
          <p>
            Hipotetycznie Istnieje coś takiego jak gwiazdy dziwne / kwarkowe/
            strange stars/ (jest to ich stan przejściowy przed powstaniem
            czarnej dziury) które w przeciwieństwie do gwiazd neutronowych nie
            składają się głównie z większcyh neutronów tylko z ich części
            składowych czyli kwarków! (Kwarki to najmniejsze istniejące części
            materii jakie istnieją). Można by powiedzieć że są na tyle małe że
            gdyby atom powiększyć do rozmiaru ziemi to kwarki dalej byłyby
            niewidoczne gołym okiem
          </p>
        </article>
        <article>
          <h2>Słońce jako soczewka</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            inventore molestiae eligendi facilis, omnis, iure obcaecati nostrum
            eius ducimus nobis voluptatibus sit. Quis earum deserunt eius,
            aspernatur adipisci odio dicta. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum ab perspiciatis aperiam,
            doloribus fugit iusto magnam itaque consequuntur a natus alias unde,
            eligendi totam, vitae accusamus reprehenderit accusantium harum?
            Recusandae!
          </p>
        </article>
      </section>
    </>
  );
};

export default Articles;
