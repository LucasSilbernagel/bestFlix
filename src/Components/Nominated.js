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
        <li key={index} className="movieContainer">
          <div className="imgContainer">
            <img src={item.Poster} alt={item.Title}/>
          </div>
          <p className="movieTitle">Title: {item.Title}</p>
          <p className="movieYear">Year: {item.Year}</p>
          <p className="moviePlot">Plot: {item.Plot}</p>
          <button onClick={removeNomination} index={index}>Remove</button>
        </li>
      );
    });
  }
}

export default Nominated;