import React from "react";
import RevievComponent from "./RevievComponent";
const Check = ({
  slide,
  length,
  TextData,
  tabOfImages,
  classOne,
  Ratings,
  isOn,
}) => {
  if (slide !== length - 1 && slide !== length - 2) {
    console.log(tabOfImages[1].Image.src);
    return (
      <>
        <RevievComponent
          classOne={classOne}
          slide={slide}
          length={length}
          Ratings={Ratings[slide + 1]}
          TextData={TextData[slide + 1]}
          tabOfImages={tabOfImages[slide + 1].Image.src}
          isOn={isOn}
        />
        <RevievComponent
          classOne={classOne}
          slide={slide}
          length={length}
          Ratings={Ratings[slide + 2]}
          TextData={TextData[slide + 2]}
          tabOfImages={tabOfImages[slide + 2].Image.src}
          isOn={isOn}
        />
      </>
    );
  } else if (slide === length - 2) {
    return (
      <>
        <RevievComponent
          classOne={classOne}
          slide={slide}
          length={length}
          Ratings={Ratings[length - 1]}
          TextData={TextData[length - 1]}
          tabOfImages={tabOfImages[length - 1].Image.src}
          isOn={isOn}
        />
        <RevievComponent
          classOne={classOne}
          slide={slide}
          length={length}
          Ratings={Ratings[length - 1]}
          TextData={TextData[0]}
          tabOfImages={tabOfImages[0].Image.src}
          isOn={isOn}
        />
      </>
    );
  } else if (slide === length - 1) {
    return (
      <>
        <RevievComponent
          classOne={classOne}
          slide={slide}
          length={length}
          Ratings={Ratings[0]}
          TextData={TextData[0]}
          isOn={isOn}
          tabOfImages={tabOfImages[0].Image.src}
        />
        <RevievComponent
          classOne={classOne}
          slide={slide}
          Ratings={Ratings[1]}
          length={length}
          TextData={TextData[1]}
          tabOfImages={tabOfImages[1].Image.src}
          isOn={isOn}
        />
      </>
    );
  }
};

export default Check;
