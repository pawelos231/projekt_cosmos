import React from "react";
import RevievComponent from "./RevievComponent";
const checkWhattoRender = ({
  slide,
  length,
  TextData,
  tabOfImages,
  classOne,
  Ratings,
}) => {
  if (slide !== 0 && slide !== 1) {
    console.log(slide);
    return (
      <>
        <>
          <RevievComponent
            classOne={classOne}
            slide={slide}
            length={length}
            key={"niewiem5"}
            Ratings={Ratings[slide - 2]}
            TextData={TextData[slide - 2]}
            tabOfImages={tabOfImages[slide - 2].Image.src}
          />
          <RevievComponent
            classOne={classOne}
            slide={slide}
            key={"niewie4"}
            Ratings={Ratings[slide - 1]}
            length={length}
            TextData={TextData[slide - 1]}
            tabOfImages={tabOfImages[slide - 1].Image.src}
          />
        </>
      </>
    );
  } else if (slide === 0) {
    return (
      <>
        <>
          <RevievComponent
            classOne={classOne}
            slide={slide}
            Ratings={Ratings[length - 2]}
            length={length}
            key={"niewiem3"}
            TextData={TextData[length - 2]}
            tabOfImages={tabOfImages[length - 2].Image.src}
          />
          <RevievComponent
            classOne={classOne}
            slide={slide}
            length={length}
            Ratings={Ratings[length - 1]}
            key={"niewiem2"}
            TextData={TextData[length - 1]}
            tabOfImages={tabOfImages[length - 1].Image.src}
          />
        </>
      </>
    );
  } else if (slide === 1) {
    return (
      <>
        <>
          <RevievComponent
            classOne={classOne}
            slide={slide}
            length={length}
            key={"niewiem"}
            Ratings={Ratings[length - 1]}
            TextData={TextData[length - 1]}
            tabOfImages={tabOfImages[length - 1].Image.src}
          />
          <RevievComponent
            classOne={classOne}
            slide={slide}
            length={length}
            Ratings={Ratings[slide - 1]}
            key={"niewiem1"}
            TextData={TextData[slide - 1]}
            tabOfImages={tabOfImages[slide - 1].Image.src}
          />
        </>
      </>
    );
  }
};

export default checkWhattoRender;
