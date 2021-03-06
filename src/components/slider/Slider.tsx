import React, { useState } from "react";
import s from "./Slider.module.less";
import cn from "classnames";
import Img1 from "../../media/slider/1.webp";
import Img2 from "../../media/slider/2.webp";
import Img3 from "../../media/slider/3.webp";
import Img4 from "../../media/slider/4.webp";
import Img5 from "../../media/slider/5.webp";
import Img6 from "../../media/slider/6.webp";
import { triangle } from "../../media/mediaSVG";
import { scrollTo } from "../shared";
import { Player, Players } from "../../pages/mainPage";

export const SLIDER_BLOCK_ID = "slider-block-id";

interface Slide {
  img: string;
  subtitle: string | JSX.Element;
  text: JSX.Element;
  audio_key: string;
  alt: string;
}

const slides: Slide[] = [
  {
    img: Img1,
    subtitle: "работа с холодными звонками",
    text: (
      <>
        прозвонит холодную базу и&nbsp;соберет заявки с&nbsp;качеством,
        схожим&nbsp;с&nbsp;качеством колл-центра. С&nbsp;любой скоростью
        и&nbsp;любым объемом
      </>
    ),
    audio_key: "slider_1",
    alt: "работа с холодными звонками",
  },
  {
    img: Img2,
    subtitle: <>работа с заявками и&nbsp;их&nbsp;квалификация</>,
    text: (
      <>
        робот самостоятельно обработает входящую заявку, квалифицирует лид,
        договорится о&nbsp;встречезвонке или сам отправит КП
      </>
    ),
    audio_key: "slider_2",
    alt: "работа с заявками и их квалификация",
  },
  {
    img: Img3,
    subtitle: "автоматизация сервисных звонков",
    text: (
      <>
        напомнит о&nbsp;вебинаре, конференции, встрече или консультации.
        Обзвонит не&nbsp;оплативших и&nbsp;отвалившихся клиентов и&nbsp;закроет
        возражения
      </>
    ),
    audio_key: "slider_3",
    alt: "автоматизация сервисных звонков",
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
    audio_key: "slider_4",
    alt: "консультация клиентов",
  },
  {
    img: Img5,
    subtitle: <>опросы и&nbsp;исследования</>,
    text: (
      <>
        проведет массовое исследование любой сложности в&nbsp;краткие сроки
        в&nbsp;формате диалога, как &laquo;настоящий человек
      </>
    ),
    audio_key: "slider_5",
    alt: "опросы и исследования",
  },
  {
    img: Img6,
    subtitle: "массовый подбор персонала",
    text: (
      <>
        проведет скрининг резюме и&nbsp;первичные собеседования. Прозвонит
        холодную базу соискателей и&nbsp;заинтересует вакансией. Voicia заберет
        месяцы рутинных работ у&nbsp;вашего hr&rsquo;а
      </>
    ),
    audio_key: "slider_6",
    alt: "массовый подбор персонала",
  },
];

interface SliderProps {
  players: Players;
  togglePlay: (id: string) => void;
}

export const Slider: React.FC<SliderProps> = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { players, togglePlay } = props;

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
            key={slide.audio_key}
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
              <div className={s.slideImg}>
                <img src={slide.img} alt={slide.alt} />
              </div>
            </div>
            <div
              className={s.right}
              onClick={() => {
                setSlideIndex((slideIndex + 1) % slides.length);
              }}
            >
              <div className={s.titleDesk}>{renderTitle()}</div>
              <div
                className={s.textWrapper}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={s.subtitle}>
                  <div className={s.playMobile}>
                    {renderPlay(players[slide.audio_key], () => {
                      console.log(slide.audio_key);
                      togglePlay(slide.audio_key);
                    })}
                  </div>
                  {slides[i].subtitle}
                </div>
                <div className={s.text}>{slides[i].text}</div>
                <div className={s.playDesk}>
                  {renderPlay(players[slide.audio_key], () => {
                    console.log(slide.audio_key);

                    togglePlay(slide.audio_key);
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={s.dots}>
        {slides.map((slide, i) => (
          <div
            key={
              typeof slide.subtitle === "string"
                ? "slide-" + slide.subtitle
                : "slide-" + i
            }
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
    <span className={s.blueText}>знакомьтесь: voicia – </span>
    интеллектуальный <br />
    голосовой робот
  </div>
);

const renderPlay = (player: Player, toggle: () => void) => (
  <div className={s.play} onClick={toggle}>
    {triangle(player.playing ? "#b0d1fb" : undefined)}
  </div>
);
