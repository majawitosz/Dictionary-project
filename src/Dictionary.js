import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResposne);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResposne(resposne) {
    setResults(resposne.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus="on"
            onChange={handleKeywordChange}
          ></input>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
