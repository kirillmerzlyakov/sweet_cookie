import React from "react";
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

export const MainPage: React.FC = () => (
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
            <div className={cn(s.button, s.buttonWhite)}>
              {triangle()}&nbsp; познакомиться с voicia
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
    <Slider />
    <BlackBlock />
    <StepsBlock />
    <TariffBlock />
    <CompaniesBlock />
    <FormBlock />
    <Footer />
  </div>
);
