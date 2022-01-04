import { tabImages } from "./DataImages";
import styles from "../../styles/Gallery.module.sass";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const GalleryComponent = ({ isOn }) => {
  return (
    <div data-ison={isOn} className={styles.mainGalleryContainer}>
      {tabImages.map((item) => (
        <AnimatePresence>
          <motion.div
            data-ison={isOn}
            key={item.src}
            className={styles.imageContainer}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
          >
            <Image
              src={item.src}
              width={300}
              height={300}
              objectFit="cover"
              layout="responsive"
              quality={20}
              alt="Photo from my projects"
              className={styles.image}
            />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default GalleryComponent;
