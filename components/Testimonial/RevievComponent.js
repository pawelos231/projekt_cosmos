import React from "react";
import styles from "../../styles/Testimonial.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const RevievComponent = ({
  TextData,
  tabOfImages,
  classOne,
  Ratings,
  isOn,
}) => {
  let tab = [];
  for (let i = 0; i < Ratings; i++) {
    tab.push(i);
  }
  return (
    <>
      {TextData !== "" ? (
        <>
          <div className={styles.container}>
            <div className={styles.starWrapper}>
              {tab.map((item) => (
                <FontAwesomeIcon
                  key={item}
                  icon={faStar}
                  className={
                    classOne === "smallOnes" ? styles.smallStar : styles.star
                  }
                />
              ))}
            </div>
            <p
              className={
                classOne === "smallOnes"
                  ? styles.smallBluryText
                  : styles.normalTextSize
              }
              data-ison={isOn}
            >
              {TextData}
            </p>
            <div
              className={
                classOne === "smallOnes"
                  ? styles.smallImageContainer
                  : styles.imageContainer
              }
            >
              <img
                src={tabOfImages}
                alt="Client Reviev"
                className={
                  classOne === "smallOnes" ? styles.smallOnes : styles.small
                }
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RevievComponent;
