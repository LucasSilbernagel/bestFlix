import React from "react";

function Main() {

  const handleSearch = (event) => {

    const searchTerm = event.target.value;
    
    fetch(
      `http://www.omdbapi.com/?t=${searchTerm}&apikey=640dab7`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response.Title);
      })
      .catch(error => console.log(error));

  };


  return (
    <>
      <main>
        <div className="wrapper">
          <form action="#">
            <label htmlFor="movieTitle">Movie title
              <input onChange={handleSearch} type="text" name="movieTitle" id="movieTitle"/>
            </label>
          </form>
          <ul className="results" id="results">
            {/* Search results go here */}
            
          </ul>
          <ul className="nominations" id="nominations">
            {/* Nominations go here */}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Main;