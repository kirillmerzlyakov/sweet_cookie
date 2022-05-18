import React from "react";
import { triangle, voiciaTitle } from "../media/mediaSVG";
import { BlackBlock } from "./black/blackBlock";
import s from "./mainPage.module.less";
import cn from "classnames";
import { TariffBlock } from "./tariff/tariffBlock";
import { CompaniesBlock } from "./companies/companiesBlock";
import { FormBlock } from "./form/formBlock";
import { StepsBlock } from "./steps/stepsBlock";
import { SecondBlock } from "./second/secondBlock";

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
    </div>
    <SecondBlock/>
    {/* <div className={s.thirdBlock}></div> */}
    <BlackBlock />
    <StepsBlock />
    <TariffBlock />
    <CompaniesBlock />
    <FormBlock />
  </div>
);
