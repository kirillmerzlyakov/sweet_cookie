import React from "react";
import { FORM_BLOCK_ID } from "../../pages/form/formBlock";
import { SECOND_BLOCK_ID } from "../../pages/second/secondBlock";
import { STEPS_BLOCK_ID } from "../../pages/steps/stepsBlock";
import { TARIFF_BLOCK_ID } from "../../pages/tariff/tariffBlock";
import { SLIDER_BLOCK_ID } from "../slider/Slider";
import { scrollTo } from "../shared";
import s from "./header.module.less";
import cn from "classnames";
import { voiciaTitle1 } from "../../media/mediaSVG";

export const Header: React.FC = () => {
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  const [kebabActive, setKebabActive] = React.useState(false);
  React.useEffect(() => {
    var scrollPrev = 0;
    const onScroll = function () {
      const scrolled = document.documentElement.scrollTop;
      scrolled < scrollPrev && scrolled > 1
        ? headerRef?.current?.classList.add(s.headerFixed)
        : headerRef?.current?.classList.remove(s.headerFixed);
      scrollPrev = scrolled;
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={s.header} ref={headerRef}>
      <div className={s.logo}>{voiciaTitle1("#1D1D1B")}</div>
      <div className={s.nav}>
        {renderTile(<>кейсы</>, SECOND_BLOCK_ID)}
        {renderTile(<>области&nbsp;применения</>, SLIDER_BLOCK_ID)}
        {renderTile(<>с&nbsp;чего&nbsp;начать</>, STEPS_BLOCK_ID)}
        {renderTile(<>тарифы</>, TARIFF_BLOCK_ID)}
        {renderTile(<>заказать&nbsp;разработку</>, FORM_BLOCK_ID)}
      </div>
      <div className={s.signIn}>войти</div>
      <div
        className={cn(s.kebabIcon, kebabActive && s.kebabIconActive)}
        onClick={() => setKebabActive(!kebabActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {kebabActive && (
        <div className={s.kebabMenu}>
          <div
            className={s.kebabMenuItem}
            onClick={() => {
              scrollTo(SECOND_BLOCK_ID);
              setKebabActive(false);
            }}
          >
            кейсы
          </div>
          <div
            className={s.kebabMenuItem}
            onClick={() => {
              scrollTo(SLIDER_BLOCK_ID);
              setKebabActive(false);
            }}
          >
            области&nbsp;применения
          </div>
          <div
            className={s.kebabMenuItem}
            onClick={() => {
              scrollTo(STEPS_BLOCK_ID);
              setKebabActive(false);
            }}
          >
            с&nbsp;чего&nbsp;начать
          </div>
          <div
            className={s.kebabMenuItem}
            onClick={() => {
              scrollTo(TARIFF_BLOCK_ID);
              setKebabActive(false);
            }}
          >
            тарифы
          </div>
          <div
            className={s.kebabMenuItem}
            onClick={() => {
              scrollTo(FORM_BLOCK_ID);
              setKebabActive(false);
            }}
          >
            заказать&nbsp;разработку
          </div>

          <div
            className={cn(s.kebabMenuItem, s.kebabMenuItemSignIn)}
            onClick={() => {}}
          >
            войти
          </div>
        </div>
      )}
    </div>
  );
};

const renderTile = (title: JSX.Element, id: string) => (
  <div className={s.tile} onClick={() => scrollTo(id)}>
    {title}
  </div>
);
