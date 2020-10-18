import React, { useState } from "react";
import SearchResults from './SearchResults';
import Nominated from './Nominated';
import { Link } from "react-router-dom";
import Save from './Save';
import Loading from './Loading';

function Main () {
  const [movies, setMovies] = useState([]);
  const [searched, setQuery] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nominated, setNominated] = useState([]);
  const [loading, setLoading] = useState(false);

  // API call
  const performSearch = (query = `${searched}`) => {
    setLoading(true)
    setTimeout(() => {
      fetch(`https://www.omdbapi.com/?type=movie&s=${query}&apikey=2b4018f5`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(res => setMovies(res.Search))
      .catch((error) => {
        console.log(error)
      })
      .then(setLoading(false))
    }, 1000)
  }

  // As text input content changes, update API search query and make API call
  const handleChange = (event) => {
    setQuery(event.target.value)
    setInputValue(event.target.value)
    performSearch(event.target.value);
  }

  // If user has nominated 4 movies, prevent them from searching for more.
  if (nominated.length === 4) {
    return (
      <main>
        <div className="wrapper">
          <div className="centerWrapper">
            <h2>Welcome to bestFlix, the best movies of all time as voted by you! Search for and nominate up to four movies, and check out the list of nominees!</h2>
          </div>
          <div className="saveContainer">
            <Save nominated={nominated} setNominated={setNominated} />
          </div>
          <Link to="/bestFlix/nominations" className="link">View nominees <span><i className="fas fa-arrow-right"></i></span></Link>
          <ul className="nominations" id="nominations">
            {/* Nominations go here */}
            <Nominated nominated={nominated} setNominated={setNominated} />
          </ul>
          <div className="saveContainer">
            <Save nominated={nominated} setNominated={setNominated} />
          </div>
        </div>
      </main>
    );
    // If user has nominated less than 4 movies, allow them to continue to nominate more.
  } else {
    return (
      <main>
        <div className="wrapper">
          <div className="centerWrapper">
            <h2>Welcome to bestFlix, the best movies of all time as voted by you! Search for and nominate up to four movies, and check out the list of nominees!</h2>
          </div>
          <Link to="/bestFlix/nominations" className="link">View nominees <span><i className="fas fa-arrow-right"></i></span></Link>
          <div className="centerWrapper">
          <form action="#">
            <label htmlFor="movieTitle" className="sr-only">Movie title:</label>
            <input onChange={handleChange} type="text" name="movieTitle" className="movieTitle" id="movieTitle" placeholder="Type a movie title" />
            </form>
            <div className="loadingContainer">
              <Loading loading={loading} />
            </div>
          </div>
          <ul className="results" id="results">
            {/* Search results go here */}
            <SearchResults movies={movies} inputValue={inputValue} nominated={nominated} setNominated={setNominated} searched={searched} />
          </ul>
          <div className="saveContainer">
            <Save nominated={nominated} setNominated={setNominated} />
          </div>
          <ul className="nominations" id="nominations">
            {/* Nominations go here */}
            <Nominated nominated={nominated} setNominated={setNominated} />
          </ul>
          <div className="saveContainer">
            <Save nominated={nominated} setNominated={setNominated} />
          </div>
        </div>
      </main>
    );
  }
};

export default Main;