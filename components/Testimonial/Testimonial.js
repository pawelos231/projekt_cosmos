import React, { Component } from "react";
import Slider from "./Slider";
import styles from "../../styles/Testimonial.module.sass";
const Testimonial = ({ isOn }) => {
  return (
    <>
      <Slider isOn={isOn} />
    </>
  );
};

export default Testimonial;
