// import React from "react";

// function Main() {

//   const handleSearch = (event) => {

//     const searchTerm = event.target.value;
    
//     fetch(
//       `http://www.omdbapi.com/?t=${searchTerm}&apikey=640dab7`,
//       {
//         method: "GET",
//       }
//     )
//       .then(res => res.json())
//       .then(response => {
//         console.log(response.Title);
//       })
//       .catch(error => console.log(error));

//   };


//   return (
//     <>
//       <main>
//         <div className="wrapper">
//           <form action="#">
//             <label htmlFor="movieTitle">Movie title
//               <input onChange={handleSearch} type="text" name="movieTitle" id="movieTitle"/>
//             </label>
//           </form>
//           <ul className="results" id="results">
//             {/* Search results go here */}
            
//           </ul>
//           <ul className="nominations" id="nominations">
//             {/* Nominations go here */}
//           </ul>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Main;





import React, { useState, useEffect } from "react";

function Main () {
  const [movie, setMovie] = useState({});
  const [searched, setQuery] = useState({});


  const performSearch = (query = `${searched}`) => {
    fetch(`http://www.omdbapi.com/?t=${query}&apikey=640dab7`)
      .then(response => response.json())
      .then(res => setMovie(res))
        

  }


  useEffect(() => {
    performSearch();
  });

  const handleChange = (event) => {
    setQuery(event.target.value)
  }



  return (
    <main>
      <div className="wrapper">
        <h2>Welcome to the Shoppies, Shopify's official movies awards! Search for and nominate up to five movies, and check out the list of nominees!</h2>
        <form action="#">
          <label htmlFor="movieTitle">Movie title
            <input onChange={handleChange} type="text" name="movieTitle" id="movieTitle"/>
          </label>
        </form>
        <ul className="results" id="results">
          {/* Search results go here */}
          
        </ul>
        <ul className="nominations" id="nominations">
          {/* Nominations go here */}
            
        </ul>


        
        <div className="movie">
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <button>Nominate!</button>
        </div>


      </div>
    </main>
  );
};

export default Main;