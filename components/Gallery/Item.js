import styles from "../../styles/Gallery.module.sass";
import Image from "next/image";
import { tabImages } from "./DataImages";
import { AnimatePresence, motion } from "framer-motion";
const Item = ({ click, itemId }) => {
  console.log(itemId);
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
            height={335}
            width={550}
            quality={50}
            layout="responsive"
            loading="eager"
            blurDataURL="./images/sfd.gif"
            placeholder="blur"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Item;
