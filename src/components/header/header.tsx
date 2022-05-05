import React from "react";
import cn from "./header.module.less";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={cn.header}>
      <div className={cn.navigation}>
        {pathname !== "/" && renderBackArrow()}
      </div>
      <div className={cn.name}>
        <Link className={cn.nameLink} to="/">
          Дарина Лачихина
        </Link>
      </div>
      <div className={cn.buttons}>
        <div
          className={cn.button}
          onClick={() => {
            if (pathname === "/") {
              document
                .getElementsByTagName("img")[1]
                .scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
              window.location.pathname = "/";
            }
          }}
        >
          Портфолио
        </div>
        <div className={cn.button}>
          <Link className={cn.button} to="/contacts">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

const renderBackArrow = () => (
  <Link className={cn.navigateLink} to="/">
    <div className={cn.arrowSvg}></div>
    <span className={cn.backText}>Назад</span>
  </Link>
);
