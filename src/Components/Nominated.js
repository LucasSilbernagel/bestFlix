import React from "react";

function Nominated(props) {

  if (!props.nominated) {
    return null;
  } else {
    return  Object.keys(props.nominated).map((index) => {
      return(
        <li key={index}>
          <p>{props.nominated[index].Title}</p>
          <p>{props.nominated[index].Year}</p>
          <p>{props.nominated[index].Plot}</p>
        </li>
      )
  })
  }
}

export default Nominated;