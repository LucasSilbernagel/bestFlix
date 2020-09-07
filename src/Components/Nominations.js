import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from './firebase';

function Nominations() {

  const [savedNominations, setSavedNominations] = useState([]);

  // Pull saved movie nominations from firebase
  useEffect(() => {
    let mounted = true;
    const dbRef = firebase.database().ref();
    if (mounted) {
      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();
        for (let key in data) {
          newState.push(data[key]);
        }
        setSavedNominations(newState);
      });
    }
    return () => mounted = false;
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
              <li key={index} className="movieContainer">
                <div className="imgContainer">
                  <img src={movie.Poster} alt={movie.Title}/>
                </div>
                <p className="movieTitle">Title: {movie.Title}</p>
                <p className="movieYear">Year: {movie.Year}</p>
                <p className="moviePlot">Plot: {movie.Plot}</p>
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