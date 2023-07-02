import React from 'react'
import loading from "./spinner.gif"
const Spinner =()=> {
    return (
      <div>
        <img className="my-3" src={loading} alt="Loading....." />
      </div>
    )
  }

export default Spinner
