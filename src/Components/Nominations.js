import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import firebase from './firebase';
import Loading from './Loading';

function Nominations() {

  const [displayedNominations, setDisplayedNominations] = useState([]);
  const [loading, setLoading] = useState(false);
  const mountedRef = useRef(true);

  // Pull saved movie nominations from firebase
  useEffect(() => {
    setLoading(true);
    const dbRef = firebase.database().ref();

    setTimeout(() => {
      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();
        for (let key in data) {
          if (!mountedRef.current) return null;
          newState.push({ key: key, movie: data[key] });
        }
        // Filter out duplicate nominations by ID (imdbID)
        // const uniqueNominations = newState.filter((v, i, a) => a.findIndex(t => (t.ID === v.ID)) === i);
        setDisplayedNominations(newState);
        mountedRef.current = false
        setLoading(false)
      });
    }, 1000)
  }, []);

  const incrementVotes = (e) => {
    const ID = e.key;
    const dbRef = firebase.database().ref(`/${ID}/Votes`);
    dbRef.once('value', (result)=> {
      const results = result.val()
      dbRef.set(results + 1)
    })
    window.location.reload();
  }

  return (
    <>
      <main>
        <div className="wrapper">
          <Link to="/bestFlix" className="link2"><span><i className="fas fa-arrow-left"></i></span> Back</Link>
          <h3 className="awardNominees">Award nominees:</h3>
          <div className="loadingContainer">
            <Loading loading={loading} />
          </div>
          <ul className="nominations">
            {/* Saved nominations go here */}
            {displayedNominations.map((movieArray) => {
            return (
              <li key={movieArray.key} className="movie">
                <div className="imgContainer">
                  <img src={movieArray.movie.Poster} alt={movieArray.movie.Title} />
                </div>
                <div className="movieText">
                  <p><span className="info">Title</span>: {movieArray.movie.Title}</p>
                  <p><span className="info">Year</span>: {movieArray.movie.Year}</p>
                  <button className="voteButton" onClick={() => incrementVotes(movieArray)} aria-label="Vote"><i className="fas fa-heart"></i></button>
                  <p><span className="info">Votes</span>: {movieArray.movie.Votes}</p>
                </div>
              </li>
            )
          })}
          </ul>
          <Link to="/bestFlix" className="link2"><span><i className="fas fa-arrow-left"></i></span> Back</Link>
        </div>
      </main>
    </>
  );
}

export default Nominations;