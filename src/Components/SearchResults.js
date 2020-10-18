import React from "react";
import Swal from 'sweetalert2';

function SearchResults(props) {

  // Nominate a movie from search results
  const handleClick = () => {
    props.setNominated(props.nominated.concat(props));
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

  // If nothing is searched, return nothing
  if (!props.movies) {
    return null;
  } else {
      let newMovie = props.movies.map((movie) => {
        return (
          <li className="movie" key={movie.imdbID}>
            <div className="imgContainer">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movieText">
              <p><span className="info">Title</span>: {movie.Title}</p>
              <p><span className="info">Year</span>: {movie.Year}</p>
            </div>
            <button onClick={handleClick} className="nominate">Nominate!</button>
          </li>
        );
      })
    return newMovie;
  }
}

export default SearchResults;