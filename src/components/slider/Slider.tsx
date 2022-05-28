import React, { useState } from "react";
import s from "./Slider.module.less";
import cn from "classnames";
import leftArrow from "./icons/left.svg";
import rightArrow from "./icons/right.svg";
import SlideImg from "../../media/slider/3.png";
import Img4 from "../../media/slider/4.png";
import Img5 from "../../media/slider/5.png";

import { triangleMedium } from "../../media/mediaSVG";
import { scrollTo } from "../shared";

export const SLIDER_BLOCK_ID = "slider-block-id";

interface Slide {
  img: string;
  subtitle: string | JSX.Element;
  text: JSX.Element;
}

const slides: Slide[] = [
  {
    img: SlideImg,
    subtitle: "работа с холодными звонками",
    text: (
      <>
        прозвонит холодную базу и&nbsp;соберет заявки с&nbsp;качеством,
        схожим&nbsp;с&nbsp;качеством колл-центра. С&nbsp;любой скоростью
        и&nbsp;любым объемом
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: <>работа с заявками и&nbsp;их&nbsp;квалификация</>,
    text: (
      <>
        робот самостоятельно обработает входящую заявку, квалифицирует лид,
        договорится о&nbsp;встречезвонке или сам отправит КП
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: "автоматизация сервисных звонков",
    text: (
      <>
        напомнит о&nbsp;вебинаре, конференции, встрече или консультации.
        Обзвонит не&nbsp;оплативших и&nbsp;отвалившихся клиентов и&nbsp;закроет
        возражения
      </>
    ),
  },
  {
    img: Img4,
    subtitle: "консультация клиентов",
    text: (
      <>
        отвечает на&nbsp;повторяющиеся вопросы клиентов с&nbsp;использованием
        актуальных данных из&nbsp;ваших CRM или&nbsp;баз&nbsp;данных
      </>
    ),
  },
  {
    img: Img5,
    subtitle: "опросы и исследования",
    text: (
      <>
        проведет массовое исследование любой сложности в&nbsp;краткие сроки
        в&nbsp;формате диалога, как &laquo;настоящий человек
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: "массовый подбор персонала",
    text: (
      <>
        проведет скрининг резюме и&nbsp;первичные собеседования. Прозвонит
        холодную базу соискателей и&nbsp;заинтересует вакансией. Voicia заберет
        месяцы рутинных работ у&nbsp;вашего hr&rsquo;а
      </>
    ),
  },
];

interface SliderProps {}

export const Slider: React.FC<SliderProps> = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className={s.containerSlider} id={SLIDER_BLOCK_ID}>
      <div className={s.titleMobile}>{renderTitle()}</div>
      <div
        className={s.slidesWrapper}
        onScroll={(e) => {
          const elem = e.currentTarget;
          const scrollWidth = elem.scrollWidth - elem.clientWidth + 90;
          const widthItem = scrollWidth / slides.length;
          const curElem = Math.floor(elem.scrollLeft / widthItem);
          if (curElem !== slideIndex) setSlideIndex(curElem);
        }}
      >
        {slides.map((slide, i) => (
          <div
            className={slideIndex === i ? cn(s.slide, s.slideActive) : s.slide}
            id={`slide-${i}`}
          >
            <div
              className={s.left}
              onClick={() =>
                setSlideIndex(
                  slideIndex === 0 ? slides.length - 1 : slideIndex - 1
                )
              }
            >
              <div key={slide.subtitle.toString()} className={s.slideImg}>
                <img src={slide.img} alt="картинка" />
              </div>
            </div>
            <div
              className={s.right}
              onClick={() => {
                setSlideIndex((slideIndex + 1) % slides.length);
              }}
            >
              <div className={s.titleDesk}>{renderTitle()}</div>
              <div className={s.textWrapper}>
                <div className={s.subtitle}>
                  <div className={s.playMobile}>{renderPlay()}</div>
                  <b>{slides[i].subtitle}</b>
                </div>
                <div className={s.text}>{slides[i].text}</div>
                <div className={s.playDesk}>{renderPlay()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={s.dots}>
        {slides.map((slide, i) => (
          <div
            key={slide.subtitle.toString()}
            className={cn(s.dot, i === slideIndex && s.activeDot)}
            onClick={() => {
              setSlideIndex(i);
              scrollTo(`slide-${i}`);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const renderTitle = () => (
  <div className={s.title}>
    <b>
      <span className={s.blueText}>знакомьтесь: voicia – </span>
      интеллектуальный <br />
      голосовой робот
    </b>
  </div>
);

const renderPlay = () => <div className={s.play}>{triangleMedium()}</div>;
