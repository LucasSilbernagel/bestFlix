import React from "react";
import firebase from './firebase';

function Save({ nominated, setNominated }) {

  // Push saved movie nominations to firebase
  const saveNominations = () => {
    const dbRef = firebase.database().ref();
    nominated.map((movie) => {
      return dbRef.push({
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
        Plot: movie.Plot
      })
    })
    setNominated([]);
  }

  // When a movie is nominated, display a button to save nominations and push to firebase
  if (!nominated.length) {
    return null;
  } else {
    return (
      <button onClick={saveNominations}>Save nominations!</button>
    );
  }
}

export default Save;