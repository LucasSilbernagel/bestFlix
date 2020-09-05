import React from "react";

function SearchResults(props) {

  const handleClick = () => {
    props.setNominated(props.nominated.concat(props))
  }

  let nominatedPlot = props.nominated.map((nominatedFilm) => {
    return nominatedFilm.Plot;
  })

  if (!props.Title) {
    return null;
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