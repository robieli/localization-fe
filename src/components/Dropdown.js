import { useTranslation } from "react-i18next";
import "./dropdown.css";

function Dropdown() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-dropdown">
      <p>{t("language")}:</p>
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
        defaultValue="en"
      >
        <option value="en">en</option>
        <option value="it">it</option>
      </select>
    </div>
  );
}

export default Dropdown;
