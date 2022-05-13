import React from "react";
import { triangle, voiciaTitle } from "../media/mediaSVG";
import { BlackBlock } from "./blackBlock";
import s from "./mainPage.module.less";
import cn from "classnames"
import { TariffBlock } from "./tariffBlock";

export const MainPage: React.FC = () => (
  <div className={s.mainPage}>
    <div className={s.firstBlock}>
      <div className={s.titleWrapper}>
        <div className={s.left}>
          <div className={s.title}>{voiciaTitle()}</div>
          <div className={s.subtitle}>интеллектуальный голосовой робот</div>
          <div className={s.description1}>
            интеллектуальный голосовой робот, который работает с клиентами от
            первого звонка до получения денег
          </div>
          <div className={s.buttons}>
            <div className={s.button}>собрать робота</div>
            <div className={cn(s.button, s.button2)}>
              {triangle()}&nbsp; познакомиться с voicia
            </div>
          </div>
        </div>
        <div className={s.right}>
          снизьте издержки на поддержку клиентов и продаже до{" "}
          <span className={s.discont}>-50%</span>
        </div>
      </div>
    </div>
    <div className={s.secondBlock}></div>
    <div className={s.thirdBlock}></div>
    <BlackBlock />
    <TariffBlock />

  </div>
);
