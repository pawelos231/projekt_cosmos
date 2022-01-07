import styles from "../../styles/Gallery.module.sass";
import Image from "next/image";
import { tabImages } from "./DataImages";
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
            height={resize ? 500 : 405}
            width={resize ? 580 : 600}
            quality={25}
            layout="responsive"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Item;
