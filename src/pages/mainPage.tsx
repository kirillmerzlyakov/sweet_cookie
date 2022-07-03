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

//import audio
import AudioMainSrc from "../media/audio/main.mp3";

import Audio1Src from "../media/audio/slider_cold_calls.mp3";
import Audio2Src from "../media/audio/slider_applications.mp3";
import Audio3Src from "../media/audio/slider_auto_service_calls.mp3";
import Audio4Src from "../media/audio/slider_consultation_client.mp3";
import Audio5Src from "../media/audio/slider_polls.mp3";
import Audio6Src from "../media/audio/slider_staff.mp3";

import AudioSecondMarketSrc from "../media/audio/second_uis.mp3";
import AudioSecondColdBaseSrc from "../media/audio/second_cold_base.mp3";
import AudioSecondCouriersSrc from "../media/audio/second_couriers.mp3";
import AudioSecondEcoSrc from "../media/audio/second_eco.mp3";
import AudioSecondHotLeadsSrc from "../media/audio/second_hot_leads.mp3";
import AudioSecondServiceLinkSrc from "../media/audio/second_service_link.mp3";
import AudioSecondLeadGenerationsSrc from "../media/audio/second_lead_generation.mp3";


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
              запусти голосового робота за 3 рабочих дня и&nbsp;подними прибыль
              до 3-x раз без увеличения затрат
            </div>
            <div className={s.buttons}>
              <div className={s.button} onClick={() => scrollTo(FORM_BLOCK_ID)}>
                заказать робота
              </div>
              <div
                className={cn(s.button, s.buttonWhite)}
                onClick={() => (toggle as ToggleFunc)("main")}
              >
                {triangle(
                  (players as Players)["main"].playing ? "#b0d1fb" : undefined
                )}
                &nbsp; послушать voicia
              </div>
            </div>
          </div>
          <div className={s.right}>
            <span className={s.discont}>98%</span> собеседников думают, что
            говорят с&nbsp;человеком
          </div>
        </div>
        <div className={s.bgImg} />
        <div className={s.marquee}>
          <Marquee speed={70} gradient={false}>
            98% собеседников думают, что говорят с человеком.&nbsp;
            98% собеседников думают, что говорят с человеком.&nbsp;
          </Marquee>
        </div>
      </div>
      <SecondBlock
        players={players as Players}
        togglePlay={toggle as ToggleFunc}
      />
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
  slider_1: {
    audio: new Audio(Audio1Src),
  },
  slider_2: {
    audio: new Audio(Audio2Src),
  },
  slider_3: {
    audio: new Audio(Audio3Src),
  },
  slider_4: {
    audio: new Audio(Audio4Src),
  },
  slider_5: {
    audio: new Audio(Audio5Src),
  },
  slider_6: {
    audio: new Audio(Audio6Src),
  },
  second_uis: {
    audio: new Audio(AudioSecondMarketSrc),
  },
  second_base: {
    audio: new Audio(AudioSecondColdBaseSrc),
  },
  second_couriers: {
    audio: new Audio(AudioSecondCouriersSrc),
  },
  second_eco: {
    audio: new Audio(AudioSecondEcoSrc),
  },
  second_hot_leads: {
    audio: new Audio(AudioSecondHotLeadsSrc),
  },
  second_service_link: {
    audio: new Audio(AudioSecondServiceLinkSrc),
  },
  second_lead_generation: {
    audio: new Audio(AudioSecondLeadGenerationsSrc),
  },
};

const defaultPlayers: Players = {
  main: { playing: false },
  slider_1: { playing: false },
  slider_2: { playing: false },
  slider_3: { playing: false },
  slider_4: { playing: false },
  slider_5: { playing: false },
  slider_6: { playing: false },
  second_uis: { playing: false },
  second_base: { playing: false },
  second_couriers: { playing: false },
  second_eco: { playing: false },
  second_hot_leads: { playing: false },
  second_service_link: { playing: false },
  second_lead_generation: { playing: false },
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
