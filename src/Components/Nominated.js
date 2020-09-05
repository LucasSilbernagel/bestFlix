import React from "react";

function Nominated({ nominated, setNominated }) {

  const removeNomination = (e) => {
    let index = e.target.getAttribute("index");
    if (index > -1) {
      let newArray = [...nominated];
      newArray.splice(index, 1);
      setNominated(newArray);
    }
  };
  
  if (!nominated) {
    return null;
  } else {
    return nominated.map((item, index) => {
      return (
        <li key={index}>
          <p>{item.Title}</p>
          <p>{item.Year}</p>
          <p>{item.Plot}</p>
          <button onClick={removeNomination} index={index}>
            Remove
          </button>
        </li>
      );
    });
  }
}

export default Nominated;