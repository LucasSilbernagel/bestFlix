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

const Main = () => {
  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState({});

  async function fetchData() {
    const res = await fetch(`http://www.omdbapi.com/?t=parasite&apikey=640dab7`);
    res.json()
      .then(res => setMovies(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <span>{movies.Title}</span>
      <span>Has error: {JSON.stringify(hasError)}</span>
    </>
  );
};

export default Main;