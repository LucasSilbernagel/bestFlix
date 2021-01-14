import React from "react";
import firebase from './firebase';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function Save({ nominated, setNominated }) {

  // When nominations are saved, show the nominations page
  const history = useHistory();
  const newPage = () => history.push('/bestFlix/nominations');

  // Push saved movie nominations to firebase
  const saveNominations = () => {
    const dbRef = firebase.database().ref();
    nominated.map((movie) => {
      return dbRef.push({
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
        ID: movie.imdbID,
        Votes: 1
      })
    })
    setNominated([]);
    // Sweet alert
    Swal.fire({
      title: 'Nominations saved',
      text: "Vote for your favourites on the list of nominees!",
      confirmButtonColor: "#00806a",
      confirmButtonText: 'Ok',
    }).then(function () {
      newPage();
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