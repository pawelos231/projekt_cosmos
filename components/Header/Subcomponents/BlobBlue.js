import styles from "../../../styles/header.module.sass";
const BlobBlue = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.SecondaryBlob}
    >
      <path
        fill="#2563FF"
        d="M42.8,-41.6C59.3,-26.3,79.1,-13.2,82.8,3.7C86.5,20.6,74.2,41.2,57.7,52C41.2,62.8,20.6,63.7,0.4,63.3C-19.8,62.9,-39.5,61.1,-54.8,50.3C-70.1,39.5,-80.9,19.8,-75.9,5C-71,-9.9,-50.3,-19.7,-35,-35C-19.7,-50.3,-9.9,-71.1,1.7,-72.8C13.2,-74.4,26.3,-57,42.8,-41.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default BlobBlue;
