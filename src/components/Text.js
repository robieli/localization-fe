import { useTranslation } from "react-i18next";
import "./text.css";

function Text() {
  const { t } = useTranslation();

  return (
    <div className="container-tri container-text">
      <div>
        <p>{t("lipsum.one")}</p>
        <p className="quote">
          "Loremipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <p>{t("lipsum.two")}</p>
        <br />
        <p>{t("lipsum.three")}</p>
      </div>
      <div>
        <p className="citation">
          {t("common.from")} <a href="https://loremipsum.io/">loremipsum.io</a>
        </p>
      </div>
    </div>
  );
}

export default Text;
