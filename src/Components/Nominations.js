import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import firebase from './firebase';

function Nominations() {

  const [savedNominations, setSavedNominations] = useState([]);
  const mountedRef = useRef(true);

  // Pull saved movie nominations from firebase
  useEffect(() => {
    const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();
        for (let key in data) {
          if (!mountedRef.current) return null;
          newState.push(data[key]);
        }
        setSavedNominations(newState);
        mountedRef.current = false
      });
  }, []);

  return (
    <>
      <main>
        <div className="wrapper">
          <Link to="/shoppies" className="link2"><span><i className="fas fa-arrow-left"></i></span> Back</Link>
          <h3 className="awardNominees">Award nominees:</h3>
          <ul className="nominations">
            {/* Saved nominations go here */}
            {savedNominations.map((movie, index) => {
            return (
              <li key={index} className="movie">
                <div className="imgContainer">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movieText">
                  <p><span className="info">Title</span>: {movie.Title}</p>
                  <p><span className="info">Year</span>: {movie.Year}</p>
                  <p><span className="info">Plot</span>: {movie.Plot}</p>
                </div>
              </li>
            )
          })}
          </ul>
          <Link to="/shoppies" className="link2"><span><i className="fas fa-arrow-left"></i></span> Back</Link>
        </div>
      </main>
    </>
  );
}

export default Nominations;