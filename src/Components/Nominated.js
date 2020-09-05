import React from "react";

function Nominated(props) {

  const removeNomination = (e) => {
    let index = e.target.getAttribute("index");
    if (index > -1) {
      props.nominated.splice(index, 1)
      props.setNominated(props.nominated)
    }
  } 

  if (!props.nominated) {
    return null;
  } else {
    return  Object.keys(props.nominated).map((item, index) => {
      return(
        <li key={index}>
          <p>{props.nominated[index].Title}</p>
          <p>{props.nominated[index].Year}</p>
          <p>{props.nominated[index].Plot}</p>
          <button onClick={removeNomination} index={index}>Remove</button>
        </li>
      )
  })
  }
}

export default Nominated;