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
          <h2>Cząsteczki wirtualne</h2>
          <p>
            Cząstki wirtualne to matematyczna koncepcja w kwantowych teoriach
            pola – cząstki fizyczne manifestujące swoją obecność poprzez
            oddziaływania, jednak łamiące zasadę powłoki masy. Wbrew powszechnym
            przekonaniom, cząstki wirtualne nie naruszają żadnych zasad
            zachowania. Cząstek wirtualnych używa się głównie w podejściu
            perturbatywnym, jednak są też użyteczne przy opisie zjawisk
            nieperturbatywnych. Brak ograniczenia powłoką masy oznacza, że
            cząstki wirtualne mogą mieć dowolną masę spoczynkową, niekoniecznie
            właściwą dla danego rodzaju normalnej cząstki. Fotony mogą być
            masywne, elektrony bezmasowe, nic nie stoi także na przeszkodzie,
            żeby miały masę ujemną.
          </p>
        </article>
        <article>
          <h2>Czarne dziury</h2>
          <p>
            Czarna jest to obiekt o niesamowicie wysokiej objętości, rozróżnia
            się je na małe, średnie, wielkie, supermasywne, hipermasywne, dwa
            ostatnie występują tylko w środku galaktyki i osiągają masy rzędu
            nawet 60 miliardów słońc (najwięszka zarejestrowana czarna dziura
            posiadała taką masę). Czarne dziury całą swoją masę mają skupioną w
            1 punkcie w przestrzeni nazywanym osobliwością, brak światła
            otaczajający ten punkt nazywamy horyzntem zdarzeń
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
            Jest to bardzo ciekawy pomysł naukowców na badanie bardzo odległych
            struktur gwiezdnych bądź układów planetarnych. Polega on na tym by
            wysłać teleskop do punktu oddalonego o 530 AU (jednostek
            astronomicznych, 1 jednostka astronomiczna to 150 mln km od słońca)
            teleskop, cały trik polega na tym ze właśnie w tym punkcie fale
            światła które załamało słońce ulegają spotkaniu, co umożliwiłoby
            wykorzystanie tego zjawiska jako teleskopu, gdzie soczewką byłoby
            słońce o średnicy 1492000 km ! Niesamowity koncept choć narazie
            niewykonalny ze względu na szybkość statków kosmicznych które
            człowiek jest wstanie wyprodukować
          </p>
        </article>
      </section>
    </>
  );
};

export default Articles;
