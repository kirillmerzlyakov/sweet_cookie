import React from "react";
import cn from "classnames";
import s1 from "../mainPage.module.less";
import s from "./formBlock.module.less";
import axios from "axios";

export const FORM_BLOCK_ID = "form-block-id";

export const FormBlock: React.FC = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [text, setText] = React.useState("");
  const [check1, setCheck1] = React.useState(true);
  const [check2, setCheck2] = React.useState(true);

  const disabledButton = !(check1 && check2);

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

        <form action="http://localhost:14444/" method="POST">
          <div className={s.formWrapper}>
            <input
              className={s.input}
              placeholder="имя"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className={s.input}
              placeholder="телефон"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <textarea
              className={cn(s.input, s.textarea)}
              name="text"
              value={text}
              placeholder="кратко расскажите о вашем бизнесе"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className={s.checkboxWrapper}>
            <div className={s.checkboxRow}>
              <input
                className={s.checkbox}
                placeholder="имя"
                type={"checkbox"}
                checked={check1}
                name="check1"
                onChange={(e) => setCheck1(!check1)}
              />
              <div className={s.checkboxDescription}>
                Да, я хочу получать новостную рассылку о Voicia
              </div>
            </div>
            <div className={s.checkboxRow}>
              <input
                className={s.checkbox}
                placeholder="имя"
                type={"checkbox"}
                name="check2"
                checked={check2}
                onChange={(e) => setCheck2(!check2)}
              ></input>
              <div className={s.checkboxDescription}>
                Даю согласие на{" "}
                <span className={s.boldText}>
                  обработку персональных данных
                </span>
              </div>
            </div>
          </div>

          <div className={s.buttons}>
            <input
              type="submit"
              value="отправить"
              className={cn(
                s1.button,
                s.button,
                disabledButton && s.buttonDisabled
              )}
              disabled={disabledButton}
            />
          </div>
        </form>
      </div>

      {/* <iframe src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1654513347"></iframe> */}

      {/* <div></div> */}
    </div>
  );
};

// axios
// .get("https://merslyakovkg6.amocrm.ru/api/v2/leads")
// .then((response) => console.log(response))
// .catch((err) => console.log(err));
