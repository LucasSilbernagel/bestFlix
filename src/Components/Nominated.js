import React, { useState, useEffect} from "react";

function Nominated(props) {

    return (
      <>
        <li className="nominated">
          <p>{props.Title}</p>
          <button>Remove</button>
        </li>
      </>
    );
}

export default Nominated;