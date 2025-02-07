import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Form from "./components/Form";
import Text from "./components/Text";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <div className="container-app">
        <img src={require("./assets/90-1600x1600.jpg")} alt={t("image-alt")} />
        <Text />
        <Form />
      </div>
      <p className="caption">
        {t("attribute-before")} alt-text{t("attribute-after")}: {t("image-alt")}
      </p>
      <Button className="button" />
    </div>
  );
}

export default App;
