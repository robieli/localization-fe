import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick() {
    if (i18n.language === "en") {
      i18n.changeLanguage("it");
    } else {
      i18n.changeLanguage("en");
    }
  }

  return (
    <div className="App">
      <h1>{t("greeting")}</h1>
      <button onClick={handleClick}>{t("languageChange")}</button>
      <button>{t("common.submit")}</button>
    </div>
  );
}

export default App;
