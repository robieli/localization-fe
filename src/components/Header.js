import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";
import "./header.css";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="container-header">
      <h1>{t("heading")}</h1>
      <Dropdown />
    </div>
  );
}

export default Header;
