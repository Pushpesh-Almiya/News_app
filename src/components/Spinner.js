import React, { Component } from 'react'
import loading from "./spinner.gif"
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="Loading....." />
      </div>
    )
  }
}

export default Spinner
