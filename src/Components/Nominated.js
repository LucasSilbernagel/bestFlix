import React, { useState, useEffect} from "react";

function Nominated(props) {

  for (let i = 0; i <= props.nominated.length; i++) {
    return (
      <>
        <li className="nominated">
          <p>{props.nominated.Title}</p>
          <button>Remove</button>
        </li>
      </>
    );
  }
}

export default Nominated;