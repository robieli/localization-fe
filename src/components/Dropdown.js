import { useTranslation } from "react-i18next";
import "./dropdown.css";

function Dropdown() {
  const { t, i18n } = useTranslation();

  function handleChange() {
    var value = document.getElementById("dropdown").value;
    i18n.changeLanguage(value);

    if (i18n.language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }

  return (
    <div className="container-dropdown">
      <p>{t("language")}:</p>
      <select
        id="dropdown"
        onChange={handleChange}
        value={i18n.language}
        defaultValue="en"
      >
        <option value="en">en</option>
        <option value="it">it</option>
        <option value="ar">ar</option>
      </select>
    </div>
  );
}

export default Dropdown;
