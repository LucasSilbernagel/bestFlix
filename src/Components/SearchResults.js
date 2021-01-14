import React, { useEffect, useRef } from "react";
import Swal from 'sweetalert2';
import firebase from './firebase';
import { useHistory } from 'react-router-dom';

function SearchResults({ movies, nominated, setNominated }) {

  // When nominations are saved, show the nominations page
  const history = useHistory();
  const newPage = () => history.push('/bestFlix/nominations');

  // If movies have been nominated, set them in the nominatedMovies ref
  let nominatedMovies = useRef(null);
  useEffect(() => {
    if (!nominated.length) {
      return;
    } else {
      nominatedMovies.current = nominated;
    }
  });

  // Push saved movie nominations to firebase
  const saveNominations = () => {
    const dbRef = firebase.database().ref();
    nominatedMovies.current.map((movie) => {
      return dbRef.push({
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
        ID: movie.imdbID,
        Votes: 1
      })
    })
    setNominated([]);
    // Sweet alert
    Swal.fire({
      title: 'Nominations saved',
      text: "Vote for your favourites on the list of nominees!",
      confirmButtonColor: "#00806a",
      confirmButtonText: 'Ok',
    }).then(function () {
      newPage();
    })
  }

  // Nominate a movie from search results
  const handleClick = (e) => {
    setNominated(nominated.concat(e));
    // Sweet alerts
    // First movie nominated
    if (nominated.length === 0) {
      Swal.fire({
        title: 'Nominated!',
        text: "You can nominate up to 4 movies. Once you're ready, save them to the official list of nominees!",
        showCancelButton: true,
        confirmButtonColor: '#00806a',
        cancelButtonColor: '#DAA520',
        confirmButtonText: 'Save nominations',
        cancelButtonText: 'Nominate more'
      }).then((result) => {
        if (result.isConfirmed) {
          saveNominations();
        }
      })
      // Max movies nominated
    } else if (nominated.length === 3) {
      Swal.fire({
        title: 'Nominated!',
        text: "You've nominated 4 movies! Save them to the official list of nominees, or change your nomination list first by removing one or more movies!",
        showCancelButton: true,
        confirmButtonColor: '#00806a',
        cancelButtonColor: '#DAA520',
        confirmButtonText: 'Save nominations',
        cancelButtonText: 'Change nominations'
      }).then((result) => {
        if (result.isConfirmed) {
          nominatedMovies.current = nominated.concat(e);
          saveNominations();
        }
      })
    }
    else {
      Swal.fire({
        title: 'Nominated!',
        showCancelButton: true,
        confirmButtonColor: '#00806a',
        cancelButtonColor: '#DAA520',
        confirmButtonText: 'Save nominations',
        cancelButtonText: 'Nominate more'
      }).then((result) => {
        if (result.isConfirmed) {
          saveNominations();
        }
      })
    }
  }

  // The ID of each nominated movie
  let nominatedID = nominated.map((nominatedFilm) => {
    return nominatedFilm.imdbID;
  })

  // If nothing is searched, return nothing
  if (!movies) {
    return null;
  } else {
    let newMovie = movies.map((movie) => {

      // If searched movie has already been nominated, disable the nomination button
      if (nominatedID.includes(movie.imdbID)) {
        return (
          <li className="movie" key={movie.imdbID}>
            <div className="imgContainer">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movieText">
              <p><span className="info">Title</span>: {movie.Title}</p>
              <p><span className="info">Year</span>: {movie.Year}</p>
            </div>
            <button disabled={true} className="nominate disabled">Nominate!</button>
          </li>
        );

        // If searched movie has not been nominated, display the nomination button normally
      } else {
        return (
          <li className="movie" key={movie.imdbID}>
            <div className="imgContainer">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movieText">
              <p><span className="info">Title</span>: {movie.Title}</p>
              <p><span className="info">Year</span>: {movie.Year}</p>
            </div>
            <button onClick={() => handleClick(movie)} className="nominate">Nominate!</button>
          </li>
        );
      }
      })
    return newMovie;
  }
}

export default SearchResults;