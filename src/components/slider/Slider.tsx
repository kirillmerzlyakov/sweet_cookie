import React, { useState } from "react";
import s from "./Slider.module.less";
import cn from "classnames";
import leftArrow from "./icons/left.svg";
import rightArrow from "./icons/right.svg";

interface SliderProps {
  slides: string[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    slideIndex === slides.length
      ? setSlideIndex(1)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex === 1
      ? setSlideIndex(slides.length)
      : setSlideIndex(slideIndex - 1);
  };

  return (
    <div className={s.containerSlider}>
      {slides.map((src, i) => (
        <div
          key={src}
          className={slideIndex === i + 1 ? cn(s.slide, s.activeAnim) : s.slide}
        >
          <img src={src} alt="картинка" />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className={s.dots}>
        {slides.map((src, i) => (
          <div
            key={src}
            className={cn(s.dot, i + 1 === slideIndex && s.activeDot)}
          ></div>
        ))}
      </div>
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
      className={cn(s.btnSlide, direction === "next" ? s.next : s.prev)}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="картинка" />
    </button>
  );
};
