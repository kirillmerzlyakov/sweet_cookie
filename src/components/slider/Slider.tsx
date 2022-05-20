import React, { useState } from "react";
import s from "./Slider.module.less";
import cn from "classnames";
import leftArrow from "./icons/left.svg";
import rightArrow from "./icons/right.svg";

import Slide1 from "../../media/slider/1.png";
import Slide2 from "../../media/slider/2.png";

export const SLIDER_BLOCK_ID = "slider-block-id";

interface Slide {
  img: string;
  subtitle: string;
  text: string;
}

const slides: Slide[] = [
  {
    img: Slide1,
    subtitle: "Работа с холодными звонками",
    text: "Прозвонит холодную базу и соберет заявки с качеством, схожим с качеством колл-центра. С любой скоростью и любым объемом.",
  },
  {
    img: Slide2,
    subtitle: "Работа с входящими заявками и их квалификация.",
    text: "Робот самостоятельно обработает входящую заявку, квалифицирует лид, договорится о встречезвонке или сам отправит КП. Экономит до 90% времени ваших операторов.",
  },
  {
    img: Slide1,
    subtitle: "Автоматизация сервисных звонков",
    text: "Самостоятельно напомнит о вебинаре, конференции, встрече или предстоящей консультации. Обзвонит не оплативших и отвалившихся клиентов и закроет возражения.",
  },
  {
    img: Slide2,
    subtitle: "Консультация клиентов",
    text: "Отвечает на повторяющиеся вопросы клиентов с использованием актуальных данных из ваших CRM или баз данных.",
  },
  {
    img: Slide1,
    subtitle: "Опросы и исследования.",
    text: "Проведет массовое исследование любой сложности в краткие сроки в формате диалога, как “настоящий человек”.",
  },
  {
    img: Slide1,
    subtitle: "Массовый подбор персонала.",
    text: "Проведет скрининг резюме и первичные собеседования. Прозвонит холодную базу соискателей и заинтересует вакансией. Voicia заберет месяцы рутинных работ у вашего hr’а.",
  },
];

interface SliderProps {}

export const Slider: React.FC<SliderProps> = (props) => {
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
    <div className={s.containerSlider} id={SLIDER_BLOCK_ID}>
      <div className={s.left}>
        {slides.map((slide, i) => (
          <div
            key={slide.subtitle}
            className={
              slideIndex === i + 1 ? cn(s.slide, s.activeAnim) : s.slide
            }
          >
            <img src={slide.img} alt="картинка" />
          </div>
        ))}
      </div>
      <div className={s.right}>
        <div className={s.title}>
          <b>
            <span className={s.blueText}>знакомьтесь: voicia – </span>
            интеллектуальный <br />
            голосовой робот
          </b>
        </div>
        <div className={s.subtitle}>
          <b>{slides[slideIndex - 1].subtitle}</b>
        </div>
        <div className={s.text}>{slides[slideIndex - 1].text}</div>
      </div>

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className={s.dots}>
        {slides.map((slide, i) => (
          <div
            key={slide.subtitle}
            className={cn(s.dot, i + 1 === slideIndex && s.activeDot)}
            onClick={() => setSlideIndex(i + 1)}
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
