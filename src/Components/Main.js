import React, { useState } from "react";
import SearchResults from './SearchResults';
import Nominated from './Nominated';
import { Link } from "react-router-dom";
import Save from './Save';
import Loading from './Loading';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Main () {
  const [movies, setMovies] = useState([]);
  const [searched, setQuery] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nominated, setNominated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

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
          <button className="headerButton" onClick={openModal}><i className="fas fa-film"></i></button>
          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <ul>
          <Nominated nominated={nominated} setNominated={setNominated} />
            </ul>
            <Save nominated={nominated} setNominated={setNominated} />
      </Modal>
          <div className="centerWrapper">
            <h2>Welcome to bestFlix, the best movies of all time as voted by you! Search for and nominate up to four movies, and vote for your favourites on the official list of nominees!</h2>
          </div>
          
          <Link to="/bestFlix/nominations" className="link">View nominees <span><i className="fas fa-arrow-right"></i></span></Link>
          
          
        </div>
      </main>
    );
    // If user has nominated less than 4 movies, allow them to continue to nominate more.
  } else {
    return (
      <main>
        <div className="wrapper">
          <button className="filmButton" onClick={openModal}><i className="fas fa-film"></i></button>
          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <ul>
          <Nominated nominated={nominated} setNominated={setNominated} />
            </ul>
            <Save nominated={nominated} setNominated={setNominated} />
      </Modal>
          <div className="centerWrapper">
            <h2>Welcome to bestFlix, the best movies of all time as voted by you! Search for and nominate up to four movies, and vote for your favourites on the official list of nominees.</h2>
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
          
        </div>
      </main>
    );
  }
};

export default Main;