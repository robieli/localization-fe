import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./form.css";

function Form() {
  const { t, i18n } = useTranslation();
  const [llmInput, setLlmInput] = useState("");
  const [llmOutput, setLlmOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (llmInput === "") {
      return "No input";
    }
    try {
      setLoading(true);
      const url =
        "http://127.0.0.1:5000/llm?query=" +
        llmInput.toString() +
        "&lang=" +
        i18n.language.toString();
      const returned = await (await fetch(url)).json();
      setLlmOutput(returned);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleClear() {
    setLlmOutput("");
  }

  function handleText(e) {
    setLlmInput(document.getElementById("input").textContent);
  }

  return (
    <div className="container-tri form">
      <h4>{t("form.header")}:</h4>
      <div contentEditable onInput={handleText} id="input"></div>
      <div className="submit-container">
        <button
          className="form-button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {t("common.submit")}
        </button>
        <button className="form-button" onClick={handleClear}>
          {t("form.clear")}
        </button>
        <p className="loading">{loading ? "Loading..." : ""}</p>
      </div>
      <div className="output">{llmOutput}</div>
    </div>
  );
}

export default Form;
