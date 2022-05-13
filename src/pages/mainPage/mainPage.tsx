import React from "react";
import { triangle, voiciaTitle } from "../../media/mediaSVG";
import cn from "./mainPage.module.less";

export const MainPage: React.FC = () => (
  <div className={cn.mainPage}>
    <div className={cn.firstBlock}>
      <div className={cn.titleWrapper}>
        <div className={cn.left}>
          <div className={cn.title}>{voiciaTitle()}</div>
          <div className={cn.subtitle}>интеллектуальный голосовой робот</div>
          <div className={cn.description1}>
            интеллектуальный голосовой робот, который работает с клиентами от
            первого звонка до получения денег
          </div>
          <div className={cn.buttons}>
            <div className={cn.button1}>собрать робота</div>
            <div className={cn.button2}>
              {triangle()}&nbsp; познакомиться с voicia
            </div>
          </div>
        </div>
        <div className={cn.right}>
          снизьте издержки на поддержку клиентов и продаже до{" "}
          <span className={cn.discont}>-50%</span>
        </div>
      </div>
    </div>
    <div className={cn.secondBlock}></div>
    <div className={cn.thirdBlock}></div>
  </div>
);
