import React, { useState } from "react";
import { tabOfImages } from "./ImageData";
import CheckWhattoRender from "./checkWhatToRender";
import Check from "./check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RevievComponent from "./RevievComponent";
import { TextData } from "./ImageData";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Ratings } from "./ImageData";
import styles from "../../styles/Testimonial.module.sass";
import "aos/dist/aos.css";
import Aos from "aos";
const Slider = () => {
  const length = tabOfImages.length;
  let [slide, setSlide] = useState(0);
  const FrontSlide = () => {
    setSlide(slide === length - 1 ? (slide = 0) : slide + 1);
    console.log(slide);
  };
  const BackSlide = () => {
    setSlide(slide === 0 ? (slide = length - 1) : slide - 1);
    console.log(slide);
  };

  return (
    <>
      <div className={styles.MainContainer} data-aos="fade-up">
        <h1 className={styles.testimonialTital}>Testimonial</h1>
        <CheckWhattoRender
          TextData={TextData}
          slide={slide}
          length={length}
          tabOfImages={tabOfImages}
          Ratings={Ratings}
          classOne="smallOnes"
        />
        <RevievComponent
          slide={slide}
          length={length}
          TextData={TextData[slide]}
          tabOfImages={tabOfImages[slide].Image.src}
          Ratings={Ratings[slide]}
        />
        <Check
          TextData={TextData}
          slide={slide}
          length={length}
          tabOfImages={tabOfImages}
          Ratings={Ratings}
          classOne="smallOnes"
        />
        <FontAwesomeIcon
          onClick={BackSlide}
          className={styles.arrowLeft}
          icon={faArrowLeft}
        />
        <FontAwesomeIcon
          onClick={FrontSlide}
          className={styles.arrowRight}
          icon={faArrowRight}
        />
      </div>
    </>
  );
};

export default Slider;
