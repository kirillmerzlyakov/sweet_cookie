import React from "react";
import cn from "./blackBlock.module.less";

export const BlackBlock: React.FC = () => (
  <div className={cn.blackBlock}>
    <div className={cn.text}>
      voicia говорит как человек, всегда следует стандартам, быстро обучается{" "}
      <span className={cn.blueText}>и молниеносно масштабируется</span>
    </div>
  </div>
);
