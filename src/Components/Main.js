import React, { useState } from "react";
import SearchResults from './SearchResults';
import Nominated from './Nominated';
import { Link } from "react-router-dom";
import Save from './Save';

function Main () {
  const [movie, setMovie] = useState({});
  const [searched, setQuery] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [nominated, setNominated] = useState([]);

  const performSearch = (query = `${searched}`) => {
    fetch(`https://www.omdbapi.com/?type=movie&t=${query}&apikey=2b4018f5`)
      .then(response => response.json())
      .then(res => setMovie(res))
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
    setInputValue(event.target.value)
    performSearch(event.target.value);
  }

  if (nominated.length === 5) {
    return (
      <main>
        <div className="wrapper">
          <h2>Welcome to the Shoppies, Shopify's official movies awards! Search for and nominate up to five movies, and check out the list of nominees!</h2>
          <h3>You've nominated five movies!</h3>
          <Link to="/nominations">See all nominations</Link>
          <ul className="nominations" id="nominations">
            {/* Nominations go here */}
            <Nominated nominated={nominated} setNominated={setNominated} />
          </ul>
          <Save nominated={nominated} setNominated={setNominated} />
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="wrapper">
          <h2>Welcome to the Shoppies, Shopify's official movies awards! Search for and nominate up to five movies, and check out the list of nominees!</h2>
          <Link to="/nominations">See all nominations</Link>
          <form action="#">
            <label htmlFor="movieTitle">Movie title
              <input onChange={handleChange} type="text" name="movieTitle" id="movieTitle"/>
            </label>
          </form>
          <ul className="results" id="results">
            {/* Search results go here */}
            <SearchResults Poster={movie.Poster} Title={movie.Title} Year={movie.Year} Plot={movie.Plot} inputValue={inputValue} nominated={nominated} setNominated={setNominated} />
          </ul>
          <ul className="nominations" id="nominations">
            {/* Nominations go here */}
            <Nominated nominated={nominated} setNominated={setNominated} />
          </ul>
          <Save nominated={nominated} setNominated={setNominated} />
        </div>
      </main>
    );
  }
};

export default Main;