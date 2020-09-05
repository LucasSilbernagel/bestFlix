import React from "react";

function SearchResults(props) {

  const handleClick = () => {
    props.setNominated(props.nominated.concat(props))
  }

  let nominatedPlot = props.nominated.map((nominatedFilm, index) => {
    return nominatedFilm.Plot;
  })

  if (!props.Title) {
    return null;
  } else if (nominatedPlot.includes(props.Plot)) {
    return (
      <>
        <li className="movie">
          <p>{props.Title}</p>
          <p>{props.Year}</p>
          <p>{props.Plot}</p>
          <button disabled={true}>Nominate!</button>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="movie">
          <p>{props.Title}</p>
          <p>{props.Year}</p>
          <p>{props.Plot}</p>
          <button onClick={handleClick}>Nominate!</button>
        </li>
      </>
    );
  }
}

export default SearchResults;