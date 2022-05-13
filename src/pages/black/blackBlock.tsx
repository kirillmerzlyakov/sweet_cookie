import React from "react";
import s from "./blackBlock.module.less";

export const BlackBlock: React.FC = () => (
  <div className={s.blackBlock}>
    <div className={s.text}>
      voicia говорит как человек, всегда следует стандартам, быстро обучается{" "}
      <span className={s.blueText}>и молниеносно масштабируется</span>
    </div>
  </div>
);
