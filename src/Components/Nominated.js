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
          <div className="imgContainer">
            <img src={item.Poster} alt={item.Title}/>
          </div>
          <p>Title: {item.Title}</p>
          <p>Year: {item.Year}</p>
          <p>Plot: {item.Plot}</p>
          <button onClick={removeNomination} index={index}>Remove</button>
        </li>
      );
    });
  }
}

export default Nominated;