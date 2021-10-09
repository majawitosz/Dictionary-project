import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { FaSistrix } from "react-icons/fa";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }

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
  if (loaded) {
    return (
      <div className="container">
        <div className="Dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="search"
                  autoFocus="on"
                  onChange={handleKeywordChange}
                  placeholder="What word you are looking for?"
                  className="SearchForm form-control col-10"
                ></input>
                <button className="searchButton col-2">
                  <FaSistrix className="searchIcon" />
                </button>
              </div>
            </form>
          </section>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
