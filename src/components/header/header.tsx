import React from "react";
import s from "./header.module.less";

export const Header: React.FC = () => {
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    var scrollPrev = 0;
    var hand = function () {
      const scrolled = document.documentElement.scrollTop;
      // if (scrolled % 10 !== 0) return;
      if (scrolled < scrollPrev && scrolled > 1) {
        headerRef?.current?.classList.add(s.headerFixed);
        console.log("add fix");
      } else {
        headerRef?.current?.classList.remove(s.headerFixed);
        console.log("remove fix");
      }

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
