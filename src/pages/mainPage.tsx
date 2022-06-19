import React, { useState, useEffect, useMemo } from "react";
import { triangle, voiciaLogo } from "../media/mediaSVG";
import { BlackBlock } from "./black/blackBlock";
import s from "./mainPage.module.less";
import cn from "classnames";
import { TariffBlock } from "./tariff/tariffBlock";
import { CompaniesBlock } from "./companies/companiesBlock";
import { FormBlock, FORM_BLOCK_ID } from "./form/formBlock";
import { StepsBlock } from "./steps/stepsBlock";
import { SecondBlock } from "./second/secondBlock";
import { Footer } from "../components/footer/footer";
import { scrollTo } from "../components/shared";
import { Slider } from "../components/slider/Slider";
import Marquee from "react-fast-marquee";

import AudioMainSrc from "../media/audio/main.mp3";

import Audio1Src from "../media/audio/slider_cold_calls.mp3";
import Audio2Src from "../media/audio/slider_applications.mp3";
import Audio3Src from "../media/audio/slider_auto_service_calls.mp3";
import Audio4Src from "../media/audio/slider_consultation_client.mp3";
import Audio5Src from "../media/audio/slider_polls.mp3";
import Audio6Src from "../media/audio/slider_staff.mp3";

export const MainPage: React.FC = () => {
  const [players, toggle] = useNewMultiAudio();
  return (
    <div className={s.mainPage}>
      <div className={s.firstBlock}>
        <div className={s.circle} />
        <div className={s.circle} />
        <div className={s.circle} />
        <div className={s.titleWrapper}>
          <div className={s.left}>
            <div className={s.title}>{voiciaLogo()}</div>
            <div className={s.subtitle}>интеллектуальный голосовой робот</div>
            <div className={s.description1}>
              интеллектуальный голосовой робот, который работает с клиентами от
              первого звонка до получения денег
            </div>
            <div className={s.buttons}>
              <div className={s.button} onClick={() => scrollTo(FORM_BLOCK_ID)}>
                собрать робота
              </div>
              <div
                className={cn(s.button, s.buttonWhite)}
                onClick={() => (toggle as ToggleFunc)("main")}
              >
                {triangle(
                  (players as Players)["main"].playing ? "#b0d1fb" : undefined
                )}
                &nbsp; познакомиться с voicia
              </div>
            </div>
          </div>
          <div className={s.right}>
            снизьте издержки на поддержку клиентов и продаже до{" "}
            <span className={s.discont}>-50%</span>
          </div>
        </div>
        <div className={s.bgImg} />
        <div className={s.marquee}>
          <Marquee speed={70} gradient={false}>
            снизьте издержки на поддержку клиентов и продаже до -50%.&nbsp;
            снизьте издержки на поддержку клиентов и продаже до -50%.&nbsp;
          </Marquee>
        </div>
      </div>
      <SecondBlock />
      <Slider players={players as Players} togglePlay={toggle as ToggleFunc} />
      <BlackBlock />
      <StepsBlock />
      <TariffBlock />
      <CompaniesBlock />
      <FormBlock />
      <Footer />
    </div>
  );
};

type ToggleFunc = (i: string) => () => void;

interface Source {
  audio: HTMLAudioElement;
}

interface Sources {
  [id: string]: Source;
}

export interface Player {
  playing: boolean;
}

export interface Players {
  [id: string]: Player;
}

let defaultSources: Sources = {
  main: {
    audio: new Audio(AudioMainSrc),
  },
  slider_0: {
    audio: new Audio(Audio1Src),
  },
  slider_1: {
    audio: new Audio(Audio2Src),
  },
  slider_2: {
    audio: new Audio(Audio3Src),
  },
  slider_3: {
    audio: new Audio(Audio4Src),
  },
  slider_4: {
    audio: new Audio(Audio5Src),
  },
  slider_5: {
    audio: new Audio(Audio6Src),
  },
};

const defaultPlayers: Players = {
  main: { playing: false },
  slider_0: { playing: false },
  slider_1: { playing: false },
  slider_2: { playing: false },
  slider_3: { playing: false },
  slider_4: { playing: false },
  slider_5: { playing: false },
};

const useNewMultiAudio = () => {
  const sources = useMemo(() => defaultSources, []);
  const [players, setPlayers] = useState(defaultPlayers);

  const toggle = (targetIndex: string) => {
    let newPlayers = { ...players };
    for (let id in players) {
      if (id === targetIndex) {
        newPlayers[id].playing = !newPlayers[id].playing;
        continue;
      }
      newPlayers[id].playing = false;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    for (let i in sources) {
      players[i].playing ? sources[i].audio.play() : sources[i].audio.pause();
    }
  }, [sources, players]);

  useEffect(() => {
    for (let i in sources) {
      sources[i].audio.addEventListener("ended", () => {
        const newPlayers = { ...players };
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    }

    return () => {
      for (let i in sources) {
        sources[i].audio.removeEventListener("ended", () => {
          const newPlayers = { ...players };
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      }
    };
  }, []);

  return [players, toggle];
};
