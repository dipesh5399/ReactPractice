import React, { Component } from "react";

export default class forceUpdate extends Component {
  render() {
    return (
      <div>
        <p>Random No.: {Math.random()}</p>
        <button onClick={() => this.forceUpdate()}>Update No.</button>
      </div>
    );
  }
}
