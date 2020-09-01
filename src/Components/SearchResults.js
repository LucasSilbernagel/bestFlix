import React, { useState} from "react";

function SearchResults(props) {

  const [nominated, setNominated] = useState([]);
  
  const handleClick = () => {
    if (nominated.length < 4) {
      nominated.push([props.Title, props.Year, props.Plot])
    } else if (nominated.length === 4) {
      alert("You have already picked 5 films!")
    }
  }
  
  if (!props.inputValue) {
    return null;
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