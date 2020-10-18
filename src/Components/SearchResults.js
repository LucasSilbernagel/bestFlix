import React from "react";
import Swal from 'sweetalert2';

function SearchResults(props) {

  // Nominate a movie from search results
  const handleClick = (e) => {
    props.setNominated(props.nominated.concat(e));
    // Sweet alerts
    if (props.nominated.length === 0) {
      Swal.fire({
        title: 'Nominated!',
        confirmButtonColor: "#00806a",
        text: "You can nominate up to 4 movies. Once you're ready, save them to the official list of nominees!",
        confirmButtonText: 'Ok',
      })
    } else if (props.nominated.length === 3) {
      Swal.fire({
        title: 'Nominated!',
        confirmButtonColor: "#00806a",
        text: "You've nominated 4 movies! Save them to the official list of nominees, or change your nomination list first by removing one or more movies!",
        confirmButtonText: 'Ok',
      })
    }
    else {
      Swal.fire({
        title: 'Nominated!',
        confirmButtonColor: "#00806a",
        confirmButtonText: 'Ok',
      })
    }
  }

  // The ID of each nominated movie
  let nominatedID = props.nominated.map((nominatedFilm) => {
    return nominatedFilm.imdbID;
  })

  // If nothing is searched, return nothing
  if (!props.movies) {
    return null;
  } else {
    let newMovie = props.movies.map((movie) => {

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