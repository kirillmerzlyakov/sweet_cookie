import React from "react";
import s from "./stepsBlock.module.less";
import cn from "classnames";

export const STEPS_BLOCK_ID = "steps-block-id";

export const StepsBlock: React.FC = () => (
  <div className={s.tariffBlock} id={STEPS_BLOCK_ID}>
    <div className={s.title}>
      <span className={s.textBlue}>от звонка до звонка</span>
      <br /> с чего начать?
    </div>
    <div className={s.subtitle}>
      На запуск Voicia под ваши задачи нам понадобится <br />
      от 3-х рабочих дней, а вам - уделить нам от 3-х часов своего времени
    </div>
    <div className={s.wrapperSteps}>
      <div className={cn(s.step, s.step1)}>
        <div className={s.stepTitleMega}>01</div>
        <div className={s.stepTitle}>
          заполняем бриф и обсуждаем вашу задачу
        </div>
        <div className={s.stepdescription}>
          в ходе бесплатного звонка наш специалист определит, какие конкретно
          части бизнес-процессов можно перенести в Voicia и сколько в этом
          случае вы сэкономите
        </div>
      </div>
      <div className={cn(s.step, s.step2)}>
        <div className={s.stepTitleMega}>02</div>

        <div className={s.stepTitle}>
          формирование скрипта и разработка робота
        </div>
        <div className={s.stepdescription}>
          в результате брифинга и тщательного анализа имеющихся материалов
          (записи звонков, модели продаж и т.д.) – мы имеем на руках готовый
          к запуску скрипт
        </div>
      </div>
      <div className={cn(s.step, s.step3)}>
        <div className={s.stepTitleMega}>
          <span className={s.border}>03</span>
        </div>

        <div className={s.stepTitle}>запуск и получение первых результатов</div>
        <div className={s.stepdescription}>
          обычно первую версию уже на 4-й день с момента старта работ итог: на
          руках свежие цифры, готовые ответить на вопрос об эффективности
        </div>
      </div>
    </div>
  </div>
);
