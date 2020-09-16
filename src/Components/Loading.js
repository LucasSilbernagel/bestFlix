import React from "react";

function Loading(props) {

  if (!props.loading) {
    return null;
  } else {
    return (
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
  }
}

export default Loading;