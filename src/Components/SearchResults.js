import React from "react";

function SearchResults(props) {

  const handleClick = () => {
    props.setNominated(props.nominated.concat(props))
  }

  const consoleLog = () => {
    console.log(props.nominated);
  }

  if (!props.Title) {
    return null;
  } else {
    return (
      <>
        <li className="movie">
          <p>{props.Title}</p>
          <p>{props.Year}</p>
          <p>{props.Plot}</p>
          <button onClick={handleClick}>Nominate!</button>
          <button onClick={consoleLog}>console log</button>
        </li>
      </>
    );
  }
}

export default SearchResults;