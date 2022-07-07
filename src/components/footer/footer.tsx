import { voiciaLogo } from "../../media/mediaSVG";
import { scrollTo } from "../shared";
import s from "./footer.module.less";
import RobotImg from "../../media/robot_footer.png";
import { SECOND_BLOCK_ID } from "../../pages/second/secondBlock";
import { SLIDER_BLOCK_ID } from "../slider/Slider";
import { STEPS_BLOCK_ID } from "../../pages/steps/stepsBlock";
import { TARIFF_BLOCK_ID } from "../../pages/tariff/tariffBlock";
import { FORM_BLOCK_ID } from "../../pages/form/formBlock";

export const Footer = () => (
  <div className={s.footer}>
    <div className={s.textBlock}>
      <div className={s.text1}>{voiciaLogo("#fff")}</div>
      <div className={s.text2}>
        <span className={s.textBlue}>снизьте издержки</span> на поддержку
        клиентов и продаже до –50%
      </div>
    </div>

    <div className={s.right}>
      <div className={s.nav}>
        {renderTile(<>кейсы</>, SECOND_BLOCK_ID)}
        {renderTile(<>области&nbsp;применения</>, SLIDER_BLOCK_ID)}
        {renderTile(<>с&nbsp;чего&nbsp;начать</>, STEPS_BLOCK_ID)}
        {renderTile(<>тарифы</>, TARIFF_BLOCK_ID)}
        {renderTile(<>заказать&nbsp;разработку</>, FORM_BLOCK_ID)}
      </div>
      <div className={s.logo}>
        <div className={s.logoText}>
          <div><a href={'https://drive.google.com/file/d/1T_HTQ4WXgtUUugQn9kuxBqLJz7r8E04w/view'} target={'_blank'} className={s.textWhite}>Публичная оферта</a></div>
          <div>Все права защищены. ©voicia, 2022</div>
        </div>
      </div>
    </div>
    <div className={s.img}>
      <img src={RobotImg} alt="voicia robot"></img>
    </div>
  </div>
);

const renderTile = (title: JSX.Element, id: string) => (
  <div className={s.navItem} onClick={() => scrollTo(id)}>
    {title}
  </div>
);
