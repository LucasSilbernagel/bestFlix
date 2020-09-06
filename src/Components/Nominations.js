import React from 'react';
import { Link } from "react-router-dom";

function Nominations() {
  return (
    <>
      <main>
        <div className="wrapper">
        <Link to="/shoppies">Back</Link>
          <ul>
            {/* Saved nominations go here */}
            
          </ul>
        </div>
      </main>
    </>
  );
}

export default Nominations;