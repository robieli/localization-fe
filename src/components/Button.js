import { useTranslation } from "react-i18next";
import "./button.css";

function Button() {
  const { t, i18n } = useTranslation();

  function handleClick() {
    if (i18n.language === "en") {
      i18n.changeLanguage("it");
    } else {
      i18n.changeLanguage("en");
    }
  }

  return (
    <div className="container-button">
      <button className="button" onClick={handleClick}>
        {t("languageChange")}
      </button>
    </div>
  );
}

export default Button;
