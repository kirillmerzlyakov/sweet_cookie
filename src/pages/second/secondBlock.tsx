import React from "react";
import s from "./secondBlock.module.less";
import cn from "classnames";
import Img1 from "../../media/man1.png";
import Img2 from "../../media/man2.png";
import Img2_mobile from "../../media/step2_mobile.png";
import { arrowDown, triangle } from "../../media/mediaSVG";

export const SECOND_BLOCK_ID = "second-block-id";

export const SecondBlock: React.FC = () => (
  <div className={s.tariffBlock} id={SECOND_BLOCK_ID}>
    <div className={s.wrapperSteps}>
      <div className={s.stepsRow}>
        <div className={cn(s.step, s.step1)}>
          <div className={s.stepTitle}>
            Внедрение голосового бота для маркетингового агентства Flow Agency
          </div>
          <div className={s.stepdescription}>
            Делегирование рутинного процесса обзвона клиентов с менеджеров
            на робота VOICIA
          </div>
          <div className={s.itemsWrapper}>
            <div className={s.row}>
              {renderSmallItem("600", <>звонков/день 3&nbsp;менеджера</>)}
              {renderSmallItem(
                "22%",
                <>
                  процент
                  <br />
                  конверсии
                </>
              )}
              {renderSmallItem("32₽", "цена участника вебинара")}
            </div>
            <div className={s.row}>
              {renderItem(
                "6000",
                <>
                  звонков
                  <br />
                  за&nbsp;полчаса
                </>
              )}
              {renderItem(
                "19%",
                <>
                  процент
                  <br />
                  конверсии
                </>
              )}
              {renderItem("19₽", "цена участника вебинара")}
            </div>
          </div>

          <div className={s.play}>{triangle()}</div>
        </div>

        <div className={cn(s.step, s.step2)}>
          <div className={s.stepTitle}>
            Лидогенерация холодной базы для Агентства Недвижимости
          </div>
          <div className={s.stepdescription}>
            Заменили первую линию колл-центра и&nbsp;снизили стоимость заявки на
            33%
          </div>
          <div className={s.img1}>
            <img
              src={window.screen.availWidth > 1024 ? Img2 : Img2_mobile}
              alt="man1"
            ></img>
          </div>

          <div className={s.itemsWrapper}>
            <div className={s.row}>
              {renderSmallItem("5000", <>звонков/день 25&nbsp;менеджеров</>)}
              {renderSmallItem("410₽", "цена заявки")}
            </div>
            <div className={s.row}>
              {renderItem(
                "30000",
                <>
                  звонков/день
                  <br />1 робот
                </>
              )}
              {renderItem("180₽", "цена заявки")}
            </div>
          </div>
          <div className={cn(s.play)}>{triangle()}</div>
        </div>
      </div>

      <div className={s.stepsRow}>
        <div className={cn(s.step, s.step3)}>
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
          <div className={s.itemsWrapper}>
            <div className={s.row}>
              {renderSmallItem(
                "8%",
                <>конверсия в соискателя на&nbsp;поиске</>
              )}
              {renderSmallItem("2000", "звонков/день 10 менеджеров")}
            </div>
            <div className={s.row}>
              {renderItem("10%", <>конверсия в соискателя на&nbsp;поиске</>)}
              <div className={s.checkTextWrapper}>
                <div className={s.checkItem}>
                  <div>
                    <br />
                    автоматическая квалификация соискателя по&nbsp;типу курьер
                    на велосипеде или курьер на авто
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(s.play)}>{triangle()}</div>
        </div>

        <div className={cn(s.step, s.step4)}>
          <div className={s.stepTitle}>
            Голосовой бот в интернет-магазин товаров для экологичной уборки
          </div>
          <div className={s.stepdescription}>
            Активировали «спящую» клиентскую базу и вырастили средний чек на
            67%.
          </div>
          <div className={s.itemsWrapper}>
            <div className={s.row}>
              {renderSmallItem(
                "10000",
                <>
                  звонков <br />в месяц
                </>
              )}
              {renderSmallItem(
                "5.5%",
                <>
                  процент
                  <br />
                  конверсии
                </>
              )}
              {renderSmallItem("4500₽", "средний чек")}
            </div>
            <div className={s.row}>
              {renderItem(
                "25975",
                <>
                  звонков
                  <br />в месяц
                </>
              )}
              {renderItem(
                "9.69%",
                <>
                  процент
                  <br />
                  конверсии
                </>
              )}
              {renderItem("7500₽", "средний чек")}
            </div>
          </div>
          <div className={s.play}>{triangle("#fff")}</div>
        </div>
      </div>
      <div className={s.buttons}>
        <div className={s.button}>
          <div className={s.arrowBox}>{arrowDown()}</div>
          &nbsp;&nbsp;больше кейсов
        </div>
      </div>
    </div>
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
