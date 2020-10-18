import React from "react";
import firebase from './firebase';
import Swal from 'sweetalert2';

function Save({ nominated, setNominated }) {

  // Push saved movie nominations to firebase
  const saveNominations = () => {
    const dbRef = firebase.database().ref();
    nominated.map((movie) => {
      return dbRef.push({
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
        ID: movie.imdbID
      })
    })
    setNominated([]);
    // Sweet alert
    Swal.fire({
      title: 'Nominations saved!',
      text: 'Make sure to check out the official list of nominees!',
      confirmButtonColor: "#00806a",
      confirmButtonText: 'Ok',
    }).then(function () {
      window.location.reload();
    })
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