import { useTranslation } from "react-i18next";
import "./button.css";

function Button() {
  const { t, i18n } = useTranslation();

  function handleClick() {
    if (i18n.language === "en") {
      i18n.changeLanguage("it");
    } else if (i18n.language === "it") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }

    if (i18n.language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
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
