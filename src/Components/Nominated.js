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
  if (!nominated.length) {
    return (
      <li>No movies nominated</li>
    )
    
    // Display each movie the user nominates
  } else {
    return nominated.map((item, index) => {
      return (
        <li key={index} className="movie">
          <div className="movieText">
            <p><span className="info">Title</span>: {item.Title}</p>
          </div>
          <button onClick={removeNomination} index={index} className="nominate"><i class="fas fa-times"></i></button>
        </li>
      );
    });
  }
}

export default Nominated;