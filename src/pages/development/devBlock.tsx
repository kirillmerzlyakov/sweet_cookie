import React from "react";
import cn from "classnames";
import s from "./devBlock.module.less";
import s1 from "../mainPage.module.less";
import s2 from "../tariff/tariffBlock.module.less";

export const DevBlock: React.FC = () => (
  <div className={s.tariffBlock}>
    <div className={s.blockWrapper}>
      <div className={s.title}>кастомная разработка</div>
      <div className={s.wrapperText}>
        <div className={s2.featureWrapper}>
          <div className={s2.featureTitle}>индивидуальный подход</div>
          <div className={s2.featuredescription}>
            решение поставленных бизнес-задач
          </div>
        </div>

        <div className={s2.featureWrapper}>
          <div className={s2.featureTitle}>преимущетсва кастома</div>
          <div className={s2.featuredescription}>
            сложные сценарии коммуникации с клиентами, большая база
            вопросов/ответов
          </div>
        </div>

        <div className={s2.featureWrapper}>
          <div className={s2.featureTitle}>структура робота</div>
          <div className={s2.featuredescription}>
            возможность самостоятельно составить структуру
          </div>
        </div>

        <div className={s2.featureWrapper}>
          <div className={s2.featureTitle}>интеграция</div>
          <div className={s2.featuredescription}>
            глубокая интеграция с CRM-системами
          </div>
        </div>

        <div className={s2.featureWrapper}>
          <div className={s2.featureTitle}>разработка</div>
          <div className={s2.featuredescription}>от 2 до 5 недель</div>
        </div>
      </div>
      <div className={cn(s1.buttons, s.buttons)}>
        <div className={s1.button}>заказать</div>
        <div className={cn(s1.button, s1.buttonWhite)}>
          мне нужна консультация
        </div>
      </div>
    </div>
  </div>
);
