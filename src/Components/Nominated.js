import React from "react";

function Nominated({ nominated, setNominated }) {

  // Remove nomination from list when Remove button is clicked
  const removeNomination = (e) => {
    let index = e.target.getAttribute("index");
    if (index > -1) {
      let newArray = [...nominated];
      newArray.splice(index, 1);
      setNominated(newArray);
    }
  };

  // If user has not nominated any movies, return nothing for this component
  if (!nominated) {
    return null;
    
    // Display each movie the user nominates
  } else {
    return nominated.map((item, index) => {
      return (
        <li key={index} className="movie">
          <h3>Nomination #{index + 1}:</h3>
          <div className="imgContainer">
            <img src={item.Poster} alt={item.Title} />
          </div>
          <div className="movieText">
            <p><span className="info">Title</span>: {item.Title}</p>
            <p><span className="info">Year</span>: {item.Year}</p>
          </div>
          <button onClick={removeNomination} index={index} className="nominate">Remove nomination</button>
        </li>
      );
    });
  }
}

export default Nominated;