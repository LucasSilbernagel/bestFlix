import React, { useState, useEffect} from "react";

function SearchResults(props) {

  // const [nominated, setNominated] = useState([]);

  // useEffect(() => {
  //   setNominated(props);
  // }, [props]);

  const handleClick = () => {
    props.setNominated(props.nominated.concat(props))
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
        </li>
      </>
    );
  }
}

export default SearchResults;