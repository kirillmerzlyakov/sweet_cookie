import React from "react";
import s from "./header.module.less";

export const Header: React.FC = () => {
  return (
    <div className={s.header}>
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
