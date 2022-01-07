import { tabImages } from "./DataImages";
import styles from "../../styles/Gallery.module.sass";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Item from "./Item";
let index = 0;
const GalleryComponent = ({ isOn }) => {
  const [resize, setOnResize] = useState(false);
  const [click, setClick] = useState(false);
  const handleClickToBig = (i) => {
    setClick(!click);
    index = i;
  };

  const toggleImage = () => {
    if (window.innerWidth < 720) {
      setOnResize(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", toggleImage);
    toggleImage();
  }, []);
  console.log(resize);
  const newTab = tabImages.map((item, i) => (
    <div>
      <AnimatePresence>
        <motion.div
          onClick={() => handleClickToBig(i)}
          data-ison={isOn}
          key={item.src}
          className={styles.imageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
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
    </div>
  ));
  return (
    <div data-ison={isOn} className={styles.mainGalleryContainer}>
      {click === false ? (
        <>{newTab}</>
      ) : (
        <motion.div className={styles.ContainerForPhotos}>
          {newTab}
          <Item resize={resize} itemId={index} click={handleClickToBig} />
        </motion.div>
      )}
    </div>
  );
};

export default GalleryComponent;
