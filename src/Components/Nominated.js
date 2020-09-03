import React, { useState, useEffect} from "react";

function Nominated(props) {

  // const [nominated, setNominated] = useState(props);

  return null;

  const handleClick = () => {
    console.log(props.nominated);
  }

  return (
    <>
      <button onClick={handleClick}>console log</button>
    </>
  );

  let nominatedMovies = Object.keys(props.nominated).map(function(key) {
    return <p>Key: {key}, Value: {props.nominated[key]}</p>;
  })

  return nominatedMovies;
  
}

export default Nominated;