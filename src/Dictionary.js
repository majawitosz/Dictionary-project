import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { FaSistrix } from "react-icons/fa";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResposne);
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let pexelsApiKey =
      "563492ad6f9170000100000119be185815db4d5c8f5bd3e016db1cc1";

    axios
      .get(pexelsUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResposne);
  }

  function handlePexelsResposne(resposne) {
    setPhotos(resposne.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleDictionaryResposne(resposne) {
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
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
