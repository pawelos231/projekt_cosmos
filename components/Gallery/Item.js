import styles from "../../styles/Gallery.module.sass";
import Image from "next/image";
import { tabImages, tabfData } from "./DataImages";
import { AnimatePresence, motion } from "framer-motion";
const Item = ({ click, itemId, resize }) => {
  return (
    <div onClick={click} className={styles.bigImageContainer}>
      <AnimatePresence>
        <motion.div
          className={styles.imageContainerBig}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
        >
          <Image
            src={tabImages[itemId].src}
            height={resize ? 590 : 405}
            width={resize ? 580 : 700}
            quality={50}
            alt="Photo about my work"
            layout="responsive"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        className={styles.TextContainer}
      >
        <h2>{tabfData[itemId].title}</h2>
        <p>{tabfData[itemId].text}</p>
      </motion.div>
    </div>
  );
};

export default Item;
