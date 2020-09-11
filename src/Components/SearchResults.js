import React from "react";

function SearchResults(props) {

  // Nominate a movie from search results
  const handleClick = () => {
    props.setNominated(props.nominated.concat(props));
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