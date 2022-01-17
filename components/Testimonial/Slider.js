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
import { useEffect } from "react";
import Aos from "aos";
const Slider = ({ isOn }) => {
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={styles.MainContainer} data-aos="fade-up">
        <h1 className={styles.testimonialTital}>Oceny klientów</h1>
        <CheckWhattoRender
          TextData={TextData}
          slide={slide}
          length={length}
          tabOfImages={tabOfImages}
          Ratings={Ratings}
          classOne="smallOnes"
          isOn={isOn}
        />
        <RevievComponent
          slide={slide}
          length={length}
          TextData={TextData[slide]}
          tabOfImages={tabOfImages[slide].Image.src}
          Ratings={Ratings[slide]}
          isOn={isOn}
        />
        <Check
          TextData={TextData}
          slide={slide}
          length={length}
          tabOfImages={tabOfImages}
          Ratings={Ratings}
          classOne="smallOnes"
          isOn={isOn}
        />
        <FontAwesomeIcon
          onClick={BackSlide}
          className={styles.arrowLeft}
          icon={faArrowLeft}
          data-ison={isOn}
        />
        <FontAwesomeIcon
          onClick={FrontSlide}
          className={styles.arrowRight}
          icon={faArrowRight}
          data-ison={isOn}
        />
      </div>
    </>
  );
};

export default Slider;
