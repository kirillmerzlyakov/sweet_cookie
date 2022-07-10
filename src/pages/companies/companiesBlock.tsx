import React from "react";
import s from "./companiesBlock.module.less";
import Marquee from "react-fast-marquee";
import SamokatImg from "./../../media/images/brands/samokat.webp";
import KotImg from "./../../media/images/brands/kot.webp";
import ElamaImg from "./../../media/images/brands/elama.webp";
import FlowImg from "./../../media/images/brands/flow.webp";

export const COMPANIES_BLOCK_ID = "second-block-id";

export const CompaniesBlock: React.FC = () => (
  <div className={s.compBlock} id={COMPANIES_BLOCK_ID}>
    <div className={s.blockWrapper}>
      50+ компаний уже подключили voicia <br />
      <span className={s.blueText}>
        и больше не переплачивают за работу менеджеров, операторов и hr’ов
      </span>
    </div>

    <Marquee speed={100} gradient={false}>
      <div className={s.marquee}>
        <div className={s.marqueeItem}>
          <img src={SamokatImg} alt="cамокат"></img>
        </div>
        <div className={s.marqueeItem}>
          <img src={ElamaImg} alt="elama"></img>
        </div>
        <div className={s.marqueeItem}>
          <img src={KotImg} alt="чистокот.ру"></img>
        </div>
        <div className={s.marqueeItem}>
          <img src={FlowImg} alt="flow agency"></img>
        </div>
        <div className={s.marqueeItem}>
          <img src={SamokatImg} alt="самокат"></img>
        </div>
        <div className={s.marqueeItem}>
          <img src={ElamaImg} alt="elama"></img>
        </div>
        <div className={s.marqueeItem}>
          <img src={KotImg} alt="чистокот.ру"></img>
        </div>
        <div className={s.marqueeItem}>
          <img src={FlowImg} alt="flow agency"></img>
        </div>
      </div>
    </Marquee>
  </div>
);
