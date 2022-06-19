import React, { useState, useEffect, useMemo } from "react";
import s from "./Slider.module.less";
import cn from "classnames";
import Img1 from "../../media/slider/1.png";
import Img2 from "../../media/slider/2.png";
import Img3 from "../../media/slider/3.png";
import Img4 from "../../media/slider/4.png";
import Img5 from "../../media/slider/5.png";
import Img6 from "../../media/slider/6.png";
import { triangle } from "../../media/mediaSVG";
import { scrollTo } from "../shared";
import Audio1Src from "../../media/audio/slider_cold_calls.mp3";
import Audio2Src from "../../media/audio/slider_applications.mp3";
import Audio3Src from "../../media/audio/slider_auto_service_calls.mp3";
import Audio4Src from "../../media/audio/slider_consultation_client.mp3";
import Audio5Src from "../../media/audio/slider_polls.mp3";
import Audio6Src from "../../media/audio/slider_staff.mp3";

export const SLIDER_BLOCK_ID = "slider-block-id";

interface Slide {
  img: string;
  subtitle: string | JSX.Element;
  text: JSX.Element;
  audioSrc: string;
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
    audioSrc: Audio1Src,
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
    audioSrc: Audio2Src,
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
    audioSrc: Audio3Src,
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
    audioSrc: Audio4Src,
  },
  {
    img: Img5,
    subtitle: <>опросы и&nbsp;исследования </>,
    text: (
      <>
        проведет массовое исследование любой сложности в&nbsp;краткие сроки
        в&nbsp;формате диалога, как &laquo;настоящий человек
      </>
    ),
    audioSrc: Audio5Src,
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
    audioSrc: Audio6Src,
  },
];

interface SliderProps {}

interface Player {
  playing: boolean;
}
type Func = (i: number) => () => void;

export const Slider: React.FC<SliderProps> = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [players, toggle] = useMultiAudio(
    slides.map((slide) => slide.audioSrc)
  );

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
            key={typeof slide.subtitle === "string" ? slide.subtitle : i}
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
              <div
                className={s.textWrapper}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={s.subtitle}>
                  <div className={s.playMobile}>
                    {renderPlay((players as Player[])[i], () =>
                      (toggle as Func)(i)
                    )}
                  </div>
                  {slides[i].subtitle}
                </div>
                <div className={s.text}>{slides[i].text}</div>
                <div className={s.playDesk}>
                  {renderPlay((players as Player[])[i], () =>
                    (toggle as Func)(i)
                  )}
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

const useMultiAudio = (urls: string[]) => {
  const sources = useMemo(
    () =>
      urls.map((url) => ({
        url,
        audio: new Audio(url),
      })),
    []
  );

  const [players, setPlayers] = useState(
    urls.map((url) => ({
      playing: false,
    }))
  );

  const toggle = (targetIndex: number) => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((p) => p.playing);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);

  return [players, toggle];
};
