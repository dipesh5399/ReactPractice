import React, { Component } from "react";

export default class Constructor extends Component {
  // state initialization
  state = {
    counter: 1,
  };
  // getSnapshotBeforeUpdate always call with componentDidUpdate method or you will get warning.
  componentDidUpdate(prevProps, prevState, snapshot) {}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps.counter, prevState.counter);
    if (prevProps.counter >= this.state.counter) {
      this.setState({
        counter: prevState.counter * 3,
      });
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.props.counter}
        <p>{this.state.counter}</p>
        <button onClick={this.props.onPropsUpdate}>Update Props</button>
      </div>
    );
  }
}
