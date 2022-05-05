import React, { useState } from "react";
import styles from "./Slider.module.less";
import cn from "classnames";
import leftArrow from "./icons/left.svg";
import rightArrow from "./icons/right.svg";


interface SliderProps {
  slides: string[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  return (
    <div className={styles.containerSlider}>
      {slides.map((src, index) => (
        <div
          key={src}
          className={
            slideIndex === index + 1
              ? cn(styles.slide, styles.activeAnim)
              : styles.slide
          }
        >
          <img src={src} alt="картинка" />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

interface Props {
  direction: string;
  moveSlide: () => void;
}

const BtnSlider: React.FC<Props> = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={cn(
        styles.btnSlide,
        direction === "next" ? styles.next : styles.prev
      )}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="картинка" />
    </button>
  );
};
