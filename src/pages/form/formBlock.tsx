import React from "react";
import cn from "classnames";
import s from "./formBlock.module.less";
import s1 from "../mainPage.module.less";

export const FORM_BLOCK_ID = "form-block-id";

export const FormBlock: React.FC = () => (
  <div className={s.tariffBlock} id={FORM_BLOCK_ID}>
    <div className={s.blockWrapper}>
      <div className={s.title}>
        Расскажите о своем проекте, а мы поможем усовершенствовать его при
        помощи voicia. Заполните форму ниже или напишите нам на почту &nbsp;
        <a href="mailto: info@voicia.ru">
          <span className={s.textBlue}>info@voicia.ru</span>
        </a>
      </div>
      <div className={s.formWrapper}>
        <input className={s.input} placeholder="имя"></input>
        <input className={s.input} placeholder="телефон"></input>
        <textarea
          className={cn(s.input, s.textarea)}
          placeholder="кратко расскажите о вашем бизнесе"
        />
      </div>

      <div className={s.checkboxWrapper}>
        <div className={s.checkboxRow}>
          <input
            className={s.checkbox}
            placeholder="имя"
            type={"checkbox"}
          ></input>
          <div className={s.checkboxDescription}>
            Да, я хочу получать новостную рассылку о Voicia
          </div>
        </div>
        <div className={s.checkboxRow}>
          <input
            className={s.checkbox}
            placeholder="имя"
            type={"checkbox"}
          ></input>
          <div className={s.checkboxDescription}>
            Даю согласие на <b>обработку персональных данных</b>
          </div>
        </div>
      </div>

      <div className={s.buttons}>
        <div className={cn(s1.button, s.button)}>отправить</div>
      </div>
    </div>
  </div>
);
