import { tabImages } from "./DataImages";
import styles from "../../styles/Gallery.module.sass";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const GalleryComponent = () => {
  return (
    <div className={styles.mainGalleryContainer}>
      {tabImages.map((item) => (
        <AnimatePresence>
          <motion.div
            key={item.src}
            className={styles.imageContainer}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
          >
            <Image
              src={item.src}
              width={500}
              height={300}
              quality={50}
              className={styles.image}
            />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default GalleryComponent;
