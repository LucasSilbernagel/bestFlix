import React from "react";

function SearchResults (props) {
  
  if (!props.inputValue) {
    return null;
  } else {
    return (
      <>
        <li className="movie">
          <p>{props.Title}</p>
          <p>{props.Year}</p>
          <p>{props.Plot}</p>
          <button>Nominate!</button>
        </li>
      </>
    );
  }
}

export default SearchResults;