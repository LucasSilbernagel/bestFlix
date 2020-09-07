import React from "react";

function SearchResults(props) {

  // Nominate a movie from search results
  const handleClick = () => {
    props.setNominated(props.nominated.concat(props))
  }

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
        <li className="movie">
          <div className="imgContainer">
            <img src={props.Poster} alt={props.Title}/>
          </div>
          <p>Title: {props.Title}</p>
          <p>Year: {props.Year}</p>
          <p>Plot: {props.Plot}</p>
          <button disabled={true}>Nominate!</button>
        </li>
      </>
    );

    // If movie is searched and has not been nominated, display in search results and allow user to nominate it
  } else {
    return (
      <>
        <li className="movie">
          <div className="imgContainer">
            <img src={props.Poster} alt={props.Title}/>
          </div>
          <p>Title: {props.Title}</p>
          <p>Year: {props.Year}</p>
          <p>Plot: {props.Plot}</p>
          <button onClick={handleClick}>Nominate!</button>
        </li>
      </>
    );
  }
}

export default SearchResults;