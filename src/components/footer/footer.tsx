import { voiciaFooter } from "../../media/mediaSVG";
import cn from "./footer.module.less";

import RobotImg from "../../media/robot_footer.png";

export const Footer = () => (
  <div className={cn.footer}>
    <div className={cn.textBlock}>
      <div className={cn.text1}>{voiciaFooter()}</div>
      <div className={cn.text2}>
        <b>
          <span className={cn.textBlue}>снизьте издержки</span> на поддержку
          клиентов и продаже до –50%
        </b>
      </div>
    </div>

    <div className={cn.right}>
      <div className={cn.nav}>
        <div className={cn.navItem}>кейсы</div>
        <div className={cn.navItem}>области&nbsp;применения</div>
        <div className={cn.navItem}>с&nbsp;чего&nbsp;начать</div>
        <div className={cn.navItem}>тарифы</div>
        <div className={cn.navItem}>заказать&nbsp;разработку</div>
      </div>
      <div className={cn.logo}>
        <div className={cn.logoText}>
          Политика конфеденциальности
          <br />
          ©voicia, 2022
        </div>
        <div></div>
      </div>
    </div>
    <div className={cn.img}>
      <img src={RobotImg} alt=""></img>
    </div>
  </div>
);
