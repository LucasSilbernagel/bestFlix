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
        text: "You can nominate up to 5 movies. Once you're ready, save them to the official list of nominees!",
        confirmButtonText: 'Ok',
      })
    } else if (props.nominated.length === 4) {
      Swal.fire({
        title: 'Nominated!',
        confirmButtonColor: "#00806a",
        text: "You've nominated 5 movies! Save them to the official list of nominees, or change your nomination list first by removing one or more movies!",
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

  // The plot of each nominated movie
  let nominatedPlot = props.nominated.map((nominatedFilm) => {
    return nominatedFilm.Plot;
  })

  // If nothing is searched, return nothing
  if (!props.Title) {
    return null;

    // If searched movie has already been nominated, disable the Nominate button
  } else if (nominatedPlot.includes(props.Plot)) {
    return (
      <>
        <li className="searchResult">
          <h3>Search result for <span>{props.searched}</span></h3>
          <div className="imgContainer">
            <img src={props.Poster} alt={props.Title}/>
          </div>
          <div className="movieText">
            <p><span className="info">Title</span>: {props.Title}</p>
            <p><span className="info">Year</span>: {props.Year}</p>
            <p><span className="info">Plot</span>: {props.Plot}</p>
          </div>
          <button disabled={true} className="nominate disabled">Nominate!</button>
        </li>
      </>
    );

    // If movie is searched and has not been nominated, display in search results and allow user to nominate it
  } else {
    return (
      <>
        <li className="searchResult">
          <h3>Search result for <span>{props.searched}</span></h3>
          <div className="imgContainer">
            <img src={props.Poster} alt={props.Title}/>
          </div>
          <div className="movieText">
            <p><span className="info">Title</span>: {props.Title}</p>
            <p><span className="info">Year</span>: {props.Year}</p>
            <p><span className="info">Plot</span>: {props.Plot}</p>
          </div>
          <button onClick={handleClick} className="nominate">Nominate!</button>
        </li>
      </>
    );
  }
}

export default SearchResults;