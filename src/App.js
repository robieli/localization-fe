import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Form from "./components/Form";
import Text from "./components/Text";
import Translate from "./components/Translate";
// import { useTranslation } from "react-i18next";

function App() {
  // const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <div className="container-app">
        <Text />
        <Translate />
        <Form />
      </div>
      <Button className="button" />
    </div>
  );
}

export default App;
