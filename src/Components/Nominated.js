import React, { useState, useEffect} from "react";

function Nominated(props) {

  const [nominated, setNominated] = useState(props);

  useEffect(() => {
    setNominated(props);
  }, [props]);

  return null;

  // return (
  //   <>
  //     <li className="nominated">
  //       <p>{nominated.Title}</p>
  //       <p>{nominated.Year}</p>
  //       <p>{nominated.Plot}</p>
  //       <button>Remove</button>
  //     </li>
  //   </>
  // );
  
}

export default Nominated;