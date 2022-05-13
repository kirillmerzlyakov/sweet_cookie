import React from "react";
import s from "./tariffBlock.module.less";
import s2 from "../mainPage.module.less";

export const TariffBlock: React.FC = () => (
  <div className={s.tariffBlock}>
    <div className={s.title}>тарифы voicia</div>
    <div className={s.subtitle}>
      На запуск Voicia под ваши задачи нам понадобится <br />
      от 3-х рабочих дней, а вам - уделить нам от 3-х часов своего времени
    </div>
    <div className={s.wrapperText}>
      <div className={s.title1}>готовое решение</div>

      <div className={s.featureWrapper}>
        <div className={s.featureTitle}>быстрый запуск робота в работу</div>
        <div className={s.featuredescription}>3 – 5 дней</div>
      </div>

      <div className={s.featureWrapper}>
        <div className={s.featureTitle}>базовые интенты</div>
        <div className={s.featuredescription}>собраны под данное решение</div>
      </div>

      <div className={s.featureWrapper}>
        <div className={s.featureTitle}>структура робота</div>
        <div className={s.featuredescription}>
          протестирована и ее нельзя редактировать
        </div>
      </div>

      <div className={s.featureWrapper}>
        <div className={s.featureTitle}>специфика клиента</div>
        <div className={s.featuredescription}>
          робот адаптируется под ваш бизнес
        </div>
      </div>

      <div className={s.featureWrapper}>
        <div className={s.featureTitle}>интеграция</div>
        <div className={s.featuredescription}>с CRM-системой</div>
      </div>
    </div>
    <div className={s.buttons}>
      <div className={s2.button}>заказать готовое решение</div>
    </div>
  </div>
);
