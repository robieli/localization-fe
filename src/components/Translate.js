import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./translate.css";

function Translate() {
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState("");

  async function handleSubmit() {
    if (input === "") {
      return "No input";
    }
    try {
      setLoading(true);
      const url =
        "http://127.0.0.1:5000/translate?query=" +
        input.toString() +
        "&lang=" +
        i18n.language.toString();
      const returned = await (await fetch(url)).json();
      setOutput(returned);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleText() {
    setInput(document.getElementById("input").textContent);
  }

  return (
    <div className="container-tri">
      <h4>{t("translate.header")}:</h4>
      <div
        contentEditable
        onInput={handleText}
        className="translate"
        id="input"
      ></div>
      <div className="submit-container">
        <button
          className="form-button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {t("common.submit")}
        </button>
        {/* <button className="form-button" onClick={handleClear}>
          {t("form.clear")}
        </button> */}
        <p className="loading">{loading ? "Loading..." : ""}</p>
      </div>
      <div className="output">{output}</div>
    </div>
  );
}

export default Translate;
