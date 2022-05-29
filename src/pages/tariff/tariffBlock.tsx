import React from "react";
import s from "./tariffBlock.module.less";
import s2 from "../mainPage.module.less";
import { scrollTo } from "../../components/shared";
import cn from "classnames";
import { FORM_BLOCK_ID } from "../form/formBlock";

export const TARIFF_BLOCK_ID = "tariff-block-id";

export const TariffBlock: React.FC = () => (
  <div className={s.tariffBlock} id={TARIFF_BLOCK_ID}>
    <div className={s.title}>тарифы voicia</div>
    <div className={s.subtitle}>
      На запуск Voicia под ваши задачи нам понадобится <br />
      от 3-х рабочих дней, а вам - уделить нам от 3-х часов своего времени
    </div>
    <div className={s.wrapperBox}>
      <div className={cn(s.tariffBox, s.tariffBox1)}>
        <div>
          <div className={s.title1}>готовое решение</div>

          <div className={s.featureWrapper}>
            <div className={s.featureTitle}>быстрый запуск робота в работу</div>
            <div className={s.featuredescription}>3 – 5 дней</div>
          </div>

          <div className={s.featureWrapper}>
            <div className={s.featureTitle}>базовые интенты</div>
            <div className={s.featuredescription}>
              собраны под данное решение
            </div>
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

        <div>
          <div className={s.price}>35 000 ₽</div>

          <div className={s.buttons}>
            <div className={cn(s2.button, s.button)} onClick={() => scrollTo(FORM_BLOCK_ID)}>
              заказать готовое решение
            </div>
          </div>
        </div>
      </div>

      <div className={cn(s.tariffBox, s.tariffBox2)}>
        <div>
          <div className={s.title1}>кастомная разработка</div>
          <div className={s.wrapperText}>
            <div className={s.featureWrapper}>
              <div className={s.featureTitle}>индивидуальный подход</div>
              <div className={s.featuredescription}>
                решение поставленных бизнес-задач
              </div>
            </div>

            <div className={s.featureWrapper}>
              <div className={s.featureTitle}>преимущетсва кастома</div>
              <div className={s.featuredescription}>
                сложные сценарии коммуникации с клиентами, большая база
                вопросов/ответов
              </div>
            </div>

            <div className={s.featureWrapper}>
              <div className={s.featureTitle}>структура робота</div>
              <div className={s.featuredescription}>
                возможность самостоятельно составить структуру
              </div>
            </div>

            <div className={s.featureWrapper}>
              <div className={s.featureTitle}>интеграция</div>
              <div className={s.featuredescription}>
                глубокая интеграция с CRM-системами
              </div>
            </div>

            <div className={s.featureWrapper}>
              <div className={s.featureTitle}>разработка</div>
              <div className={s.featuredescription}>от 2 до 5 недель</div>
            </div>
          </div>
        </div>
        <div>
          <div className={s.price}>от 79 000 ₽</div>

          <div className={cn(s.buttons, s.buttons)}>
            <div className={cn(s2.button, s.button)} onClick={() => scrollTo(FORM_BLOCK_ID)}>
              заказать
            </div>
            <div
              className={cn(s2.button, s.button, s.buttonWhite)}
              onClick={() => scrollTo(FORM_BLOCK_ID)}
            >
              мне нужна консультация
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
