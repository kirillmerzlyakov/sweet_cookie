import React, { useState } from "react";
import s from "./Slider.module.less";
import cn from "classnames";
import leftArrow from "./icons/left.svg";
import rightArrow from "./icons/right.svg";
import SlideImg from "../../media/slider/3.png";
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
        Прозвонит холодную базу и&nbsp;соберет заявки с&nbsp;качеством,
        схожим&nbsp;с&nbsp;качеством колл-центра. С&nbsp;любой скоростью
        и&nbsp;любым объемом.
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: <>работа с входящими заявками и&nbsp;их&nbsp;квалификация</>,
    text: (
      <>
        Робот самостоятельно обработает входящую заявку, квалифицирует лид,
        договорится о&nbsp;встречезвонке или сам отправит КП. Экономит
        до&nbsp;90% времени ваших операторов.
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: "автоматизация сервисных звонков",
    text: (
      <>
        Самостоятельно напомнит о&nbsp;вебинаре, конференции, встрече или
        предстоящей консультации. Обзвонит не&nbsp;оплативших
        и&nbsp;отвалившихся клиентов и&nbsp;закроет возражения.
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: "консультация клиентов",
    text: (
      <>
        Отвечает на&nbsp;повторяющиеся вопросы клиентов с&nbsp;использованием
        актуальных данных из&nbsp;ваших CRM или&nbsp;баз&nbsp;данных.
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: "опросы и исследования",
    text: (
      <>
        Проведет массовое исследование любой сложности в&nbsp;краткие сроки
        в&nbsp;формате диалога, как &laquo;настоящий человек&raquo;.
      </>
    ),
  },
  {
    img: SlideImg,
    subtitle: "массовый подбор персонала",
    text: (
      <>
        Проведет скрининг резюме и&nbsp;первичные собеседования. Прозвонит
        холодную базу соискателей и&nbsp;заинтересует вакансией. Voicia заберет
        месяцы рутинных работ у&nbsp;вашего hr&rsquo;а.
      </>
    ),
  },
];

interface SliderProps {}

export const Slider: React.FC<SliderProps> = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className={s.containerSlider} id={SLIDER_BLOCK_ID}>
      <div className={s.titleMobile}>{renderTitle()}</div>
      <div className={s.slidesWrapper}>
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
                  <b>{slides[i].subtitle}</b>
                </div>
                <div className={s.text}>{slides[i].text}</div>
                {renderPlay()}
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
