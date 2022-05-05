import React from "react";
import cn from "./header.module.less";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={cn.header}>
      <div className={cn.left}>
        <div className={cn.tile}>кейсы</div>
        <div className={cn.tile}>области применения</div>
        <div className={cn.tile}>с чего начать</div>
        <div className={cn.tile}>тарифы</div>
        <div className={cn.tile}>заказать разработку</div>
      </div>
      <>
        <div className={cn.signIn}>войти</div>
      </>
    </div>
  );
};

const renderBackArrow = () => (
  <Link className={cn.navigateLink} to="/">
    <div className={cn.arrowSvg}></div>
    <span className={cn.backText}>Назад</span>
  </Link>
);
