import React from "react";
import s from "./formBlock.module.less";

export const FORM_BLOCK_ID = "form-block-id";

export const FormBlock: React.FC = () => {
  const myRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const docCreateElem = document.createElement("script");
    docCreateElem.src =
      "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1655902718";
    docCreateElem.id = "amoforms_script_948589";
    myRef.current!.appendChild(docCreateElem);
    require("./amoScript");
  }, []);

  return (
    <div className={s.tariffBlock} id={FORM_BLOCK_ID}>
      <div className={s.left}></div>
      <div className={s.blockWrapper}>
        <div className={s.title}>
          Расскажите о своем проекте, а мы поможем усовершенствовать его при
          помощи Voicia. Заполните форму ниже или напишите нам на почту &nbsp;
          <a href="mailto: info@voicia.ru">
            <span className={s.textBlue}>info@voicia.ru</span>
          </a>
        </div>
        <></>

        <div ref={myRef} id={"amoForm"} className={s.amoForm} />
      </div>
    </div>
  );
};
