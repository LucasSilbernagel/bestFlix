import React, { useState, useEffect } from "react";

function Nominated(props) {

  // return null;

  // const handleClick = () => {
  //   console.log(props.nominated);
  // }

  // return (
  //   <>
  //     <button onClick={handleClick}>console log</button>
  //   </>
  // );

  // return (
  //   <li>
  //     {props.nominated.map((value, index) => {
  //       return <p key={index}>{value}</p>
  //     })}
  //   </li>
  // )

  // let nominatedMovies = Object.keys(props.nominated).map(function(key) {
  //   return <p>Key: {key}, Value: {props.nominated[key]}</p>;
  // })

  // let nominatedMovies = forEach

  // return nominatedMovies;

  const handleClick = () => {
    console.log(props.Title);
  }

  if (!props.nominated) {
    return null;
  } else {
    return  Object.keys(props.nominated).map((item,index) => {
      return(
        <li key={index}>
          <p>{index.Title}</p>
          <p>{item.Year}</p>
          <p>{item.Plot}</p>
          <button onClick={handleClick}>console</button>
        </li>
      )
  })
  }


}

export default Nominated;