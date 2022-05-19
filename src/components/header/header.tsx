import React from "react";
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
        <div className={s.tile}>кейсы</div>
        <div className={s.tile}>области&nbsp;применения</div>
        <div className={s.tile}>с&nbsp;чего&nbsp;начать</div>
        <div className={s.tile}>тарифы</div>
        <div className={s.tile}>заказать&nbsp;разработку</div>
      </div>
      <>
        <div className={s.signIn}>войти</div>
      </>
    </div>
  );
};
