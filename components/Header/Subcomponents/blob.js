import styles from "../../../styles/header.module.sass";
const Blob = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.FirstBlob}
    >
      <path
        fill="#EA3A60"
        d="M49.7,-59.5C60.4,-50.4,62,-30.8,57.6,-16C53.3,-1.2,42.9,8.8,35.9,20.4C28.8,32,25,45.1,17.6,47.5C10.1,49.9,-0.9,41.5,-13.6,37C-26.3,32.6,-40.6,32.1,-53.9,23.9C-67.1,15.7,-79.5,-0.2,-78.5,-15.3C-77.6,-30.4,-63.5,-44.6,-48.2,-52.9C-32.9,-61.2,-16.4,-63.6,1.6,-65.5C19.6,-67.4,39.1,-68.7,49.7,-59.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
