import React from "react";
import { FORM_BLOCK_ID } from "../../pages/form/formBlock";
import { SECOND_BLOCK_ID } from "../../pages/second/secondBlock";
import { STEPS_BLOCK_ID } from "../../pages/steps/stepsBlock";
import { TARIFF_BLOCK_ID } from "../../pages/tariff/tariffBlock";
import { SLIDER_BLOCK_ID } from "../slider/Slider";
import s from "./header.module.less";

export const Header: React.FC = () => {
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    var scrollPrev = 0;
    var hand = function () {
      const scrolled = document.documentElement.scrollTop;
      scrolled < scrollPrev && scrolled > 1
        ? headerRef?.current?.classList.add(s.headerFixed)
        : headerRef?.current?.classList.remove(s.headerFixed);
      scrollPrev = scrolled;
    };
    window.addEventListener("scroll", hand);
  }, []);

  return (
    <div className={s.header} ref={headerRef}>
      <div className={s.left}>
        {renderTile(<>кейсы</>, SECOND_BLOCK_ID)}
        {renderTile(<>области&nbsp;применения</>, SLIDER_BLOCK_ID)}
        {renderTile(<>с&nbsp;чего&nbsp;начать</>, STEPS_BLOCK_ID)}
        {renderTile(<>тарифы</>, TARIFF_BLOCK_ID)}
        {renderTile(<>заказать&nbsp;разработку</>, FORM_BLOCK_ID)}
      </div>
      <>
        <div className={s.signIn}>войти</div>
      </>
    </div>
  );
};

const renderTile = (title: JSX.Element, id: string) => (
  <div className={s.tile} onClick={() => scrollTo(id)}>
    {title}
  </div>
);

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
