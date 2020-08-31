import React, { useState } from "react";

function SearchResults (props) {

  const [inputValue, setInputValue] = useState(props);
  const [movie, setMovie] = useState(props);
  
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

export default SearchResults;