import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from './firebase';
import Loading from './Loading';

function Nominations() {

  const [displayedNominations, setDisplayedNominations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([])

  // Pull saved movie nominations from firebase
  useEffect(() => {
    setLoading(true);
    const dbRef = firebase.database().ref();

    setTimeout(() => {
      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();
        for (let key in data) {
          newState.push({ key: key, movie: data[key] });
        }

        // Filter out duplicate nominations by ID (imdbID)
        const uniqueNominations = newState.filter((v, i, a) => a.findIndex(t => (t.movie.ID === v.movie.ID)) === i);

        // Sort nominations in descending order by number of votes
        const sortedNominations = uniqueNominations.sort(function(a, b) {
          return parseFloat(b.movie.Votes) - parseFloat(a.movie.Votes);
        });

        setDisplayedNominations(sortedNominations);
        setLoading(false)
      });
    }, 1000)
  }, []);

  // Function to increase movie vote count by one on vote click
  const incrementVotes = (e) => {
    setDisabledButtons(prevButtons => {
      const newButtons = [...prevButtons]
      newButtons.push(e.movie.ID)
      return newButtons
    })
    const ID = e.key;
    const dbRef = firebase.database().ref(`/${ID}/Votes`);
    dbRef.once('value', (result)=> {
      const results = result.val()
      dbRef.set(results + 1)
    })
  }

  return (
    <main>
      <div className="wrapper">

        {/* Link to return to main page */}
        <Link to="/bestFlix" className="link"><span><i className="fas fa-arrow-left"></i></span> Back</Link>

        <h3 className="awardNominees">Award nominees:</h3>

        {/* Loading animation goes here */}
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
                <button disabled={disabledButtons.includes(movieArray.movie.ID)} className="voteButton" onClick={() => incrementVotes(movieArray)} aria-label="Vote">
                  <i className="fas fa-heart">
                    <span className="voteCount" style={movieArray.movie.Votes < 10 ? {paddingLeft: '7px'} : {}}>{movieArray.movie.Votes}</span>
                  </i>
                </button>
              </div>
            </li>
          )
        })}
        </ul>

        {/* Link to return to main page */}
        <Link to="/bestFlix" className="link"><span><i className="fas fa-arrow-left"></i></span> Back</Link>
      </div>
    </main>
  );
}

export default Nominations;