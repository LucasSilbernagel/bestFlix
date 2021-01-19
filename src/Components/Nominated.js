import React from "react";

function Nominated({ nominated, setNominated }) {

  // Remove nomination from list when Remove button is clicked
  const removeNomination = (e) => {
    let index = e.currentTarget.getAttribute("index");
    if (index > -1) {
      let newArray = [...nominated];
      newArray.splice(index, 1);
      setNominated(newArray);
    }
  };

  // If user has not nominated any movies, return nothing for this component
  if (!nominated.length) {
    return (
      <li>Nominate some movies to add them to your list!</li>
    )
    
    // Display each movie the user nominates
  } else {
    return nominated.map((item, index) => {
      return (
        <li key={index} className="nominatedItem">
          <div>
            <p>{item.Title}</p>
            <button aria-label="remove nomination" onClick={removeNomination} index={index} className="nominate"><i className="fas fa-times"></i></button>
          </div>
        </li>
      );
    });
  }
}

export default Nominated;