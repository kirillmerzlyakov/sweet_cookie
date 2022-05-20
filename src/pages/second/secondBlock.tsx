import React from "react";
import s from "./secondBlock.module.less";
import s2 from "../mainPage.module.less";
import cn from "classnames";
import Img1 from "../../media/man1.png";
import Img2 from "../../media/man2.png";
import { triangleBig } from "../../media/mediaSVG";
import { Slider } from "../../components/slider/Slider";

export const SECOND_BLOCK_ID = "second-block-id";

export const SecondBlock: React.FC = () => (
  <div className={s.tariffBlock} id={SECOND_BLOCK_ID}>
    <div className={s.wrapperSteps}>
      <div className={cn(s.step, s.step2)}>
        <div className={s.stepTitle}>
          Внедрение голосового бота для маркетингового агентства Flow Agency
        </div>
        <div className={s.stepdescription}>
          Делегирование рутинного процесса обзвона клиентов с менеджеров
          на робота VOICIA
        </div>
        <div className={s.itemsWrapper}>
          {renderSmallItem("600", "звонков/день 3 менеджера")}
          {renderSmallItem("22%", "процент конверсии")}
          {renderSmallItem("32₽", "цена одного участника вебинара")}
          {renderItem("6000", "звонков за полчаса")}
          {renderItem("19%", "процент конверсии")}
          {renderItem("19₽", "цена одного участника вебинара")}
        </div>

        <div className={s.play}>{triangleBig()}</div>
      </div>

      <div className={cn(s.step)}>
        <div className={s.stepTitle}>
          Лидогенерация холодной базы для Агентства Недвижимости
        </div>
        <div className={s.stepdescription} style={{ width: "336px" }}>
          Заменили первую линию колл-центра и снизили стоимость заявки на 33%
        </div>
        <div className={s.img1}>
          <img src={Img2} alt="man1"></img>
        </div>

        <div className={s.itemsWrapper} style={{ width: "300px" }}>
          {renderSmallItem("5000", "звонков/день 25 менеджеров")}
          {renderSmallItem("410₽", "цена заявки")}
          {renderItem("30 000", "звонков/день")}
          {renderItem("180₽", "цена заявки")}
        </div>
        <div className={cn(s.play)}>{triangleBig()}</div>
      </div>

      <div className={cn(s.step)}>
        <div className={s.stepTitle}>
          Массовый набор курьеров с кадрового резерва для Самоката
        </div>
        <div className={s.stepdescription} style={{ width: "285px" }}>
          Доверили рутинный процесс HR роботу и получили 10% конверсии
          в соискателя
        </div>
        <div className={s.img2}>
          <img src={Img1} alt="man1"></img>
        </div>
        <div className={s.itemsWrapper} style={{ width: "300px" }}>
          {renderSmallItem("600", "звонков/день 3 менеджера")}
          {renderSmallItem("22%", "процент конверсии")}
          {renderItem("6000", "звонков за полчаса")}
          {renderItem("19%", "процент конверсии")}
        </div>
        <div className={cn(s.play)}>{triangleBig()}</div>
      </div>

      <div className={cn(s.step, s.step3)}>
        <div className={s.stepTitle}>
          Внедрение голосового бота для маркетингового агентства Flow Agency
        </div>
        <div className={s.stepdescription} style={{ width: "400px" }}>
          Делегирование рутинного процесса обзвона клиентов с менеджеров
          на робота VOICIA
        </div>
        <div className={s.itemsWrapper}>
          {renderSmallItem("600", "звонков/день 3 менеджера")}
          {renderSmallItem("22%", "процент конверсии")}
          {renderSmallItem("32₽", "цена одного участника вебинара")}
          {renderItem("6000", "звонков за полчаса")}
          {renderItem("19%", "процент конверсии")}
          {renderItem("19₽", "цена одного участника вебинара")}
        </div>
        <div className={cn(s.play, s.playWhite)}>{triangleBig(true)}</div>
      </div>
      <div className={s.buttons}>
        <div className={cn(s2.button, s.button)}>больше кейсов</div>
      </div>
    </div>

    <Slider />
  </div>
);

const renderItem = (title: string, subtitle: string | JSX.Element) => (
  <div className={s.item}>
    <div className={s.itemTitle}>{title}</div>
    <div className={s.itemSubtitle}>{subtitle}</div>
  </div>
);

const renderSmallItem = (title: string, subtitle: string | JSX.Element) => (
  <div className={s.itemSmall}>
    <div className={s.itemSmallTitle}>{title}</div>
    <div className={s.itemSubtitle}>{subtitle}</div>
  </div>
);
