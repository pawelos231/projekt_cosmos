import styles from "../../../styles/offers.module.sass";
const BlobOrange = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.BlobOrange}
    >
      <path
        fill="#FFA740"
        d="M31,-44C42.9,-34,57.3,-28.6,65,-18C72.7,-7.4,73.7,8.4,71,25.1C68.4,41.7,62,59.1,49.5,62.7C37.1,66.2,18.5,55.9,0.2,55.7C-18.2,55.5,-36.5,65.4,-42.7,59.8C-48.9,54.2,-43,33.1,-47.3,16.2C-51.7,-0.7,-66.1,-13.4,-69.7,-28.9C-73.2,-44.3,-65.8,-62.4,-52.4,-72C-39,-81.5,-19.5,-82.6,-5,-75.7C9.5,-68.9,19,-54.1,31,-44Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default BlobOrange;
