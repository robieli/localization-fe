import { useTranslation } from "react-i18next";
import "./form.css";

function Form() {
  const { t } = useTranslation();

  return (
    <div className="container-tri">
      <form>
        <div className="container-name">
          <div>
            <label for="fname">{t("form.name.first")}:</label>
            <br />
            <input type="text" id="fname" name="fname" />
          </div>
          <div>
            <label for="lname">{t("form.name.last")}:</label>
            <br />
            <input type="text" id="lname" name="lname" />
          </div>
        </div>
        <div>
          <label for="paragraph" id="paragraph" name="paragraph">
            {t("form.message")}:
          </label>
          <br />
          <textarea
            type="text"
            id="paragraph"
            name="paragraph"
            placeholder={t("form.placeholder")}
          />
        </div>
        <div className="container-multi">
          <div className="container-radio">
            <label for="option" id="option" name="option">
              {t("form.option", { count: 0 })}:
            </label>
            <br />
            <div>
              <input type="radio" id="one" name="option" value="one" />
              <label id="one" for="one">
                {t("form.option", { count: 1 })} 1
              </label>
            </div>
            <div>
              <input type="radio" id="two" name="option" value="two" />
              <label id="two" for="two">
                {t("form.option", { count: 1 })} 2
              </label>
            </div>
            <div>
              <input type="radio" id="three" name="option" value="three" />
              <label id="three" for="three">
                {t("form.option", { count: 1 })} 3
              </label>
            </div>
          </div>
          <div className="container-checkbox">
            <label for="option" id="option" name="option">
              {t("form.option", { count: 0 })}:
            </label>
            <br />
            <div>
              <input type="checkbox" id="one" name="option" value="one" />
              <label id="one" for="one">
                {t("form.option", { count: 1 })} 1
              </label>
            </div>
            <div>
              <input type="checkbox" id="two" name="option" value="two" />
              <label id="two" for="two">
                {t("form.option", { count: 1 })} 2
              </label>
            </div>
            <div>
              <input type="checkbox" id="three" name="option" value="three" />
              <label id="three" for="three">
                {t("form.option", { count: 1 })} 3
              </label>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="form-button blue">{t("common.submit")}</button>
          <button className="form-button">{t("common.cancel")}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
