import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from './firebase';

function Nominations() {

  const [savedNominations, setSavedNominations] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      setSavedNominations(newState);
    });
  }, []);

  return (
    <>
      <main>
        <div className="wrapper">
        <Link to="/shoppies">Back</Link>
          <ul>
            {/* Saved nominations go here */}
            {savedNominations.map((movie, index) => {
            return (
              <li key={index}>
                <div className="imgContainer">
                  <img src={movie.Poster} alt={movie.Title}/>
                </div>
                <p>Title: {movie.Title}</p>
                <p>Year: {movie.Year}</p>
                <p>Plot: {movie.Plot}</p>
              </li>
            )
          })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Nominations;