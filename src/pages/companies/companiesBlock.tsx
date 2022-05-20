import React from "react";
import s from "./companiesBlock.module.less";
import Marquee from "react-fast-marquee";
import SamokatImg from "./../../media/samokat.png";
import KotImg from "./../../media/kot.png";
import ElamaImg from "./../../media/elama.png";
import FlowImg from "./../../media/flow.png";

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
        <div>
          <img src={SamokatImg} alt="Самокат"></img>
        </div>
        <div>
          <img src={ElamaImg} alt="Elama"></img>
        </div>
        <div>
          <img src={KotImg} alt="Кот"></img>
        </div>
        <div>
          <img src={FlowImg} alt="Flow"></img>
        </div>
        <div>
          <img src={SamokatImg} alt="Самокат"></img>
        </div>
        <div>
          <img src={ElamaImg} alt="Elama"></img>
        </div>
        <div>
          <img src={KotImg} alt="Кот"></img>
        </div>
        <div>
          <img src={FlowImg} alt="Flow"></img>
        </div>
      </div>
    </Marquee>
  </div>
);
