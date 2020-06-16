import React, { Component } from "react";

export default class DerivedStateLifeCycle extends Component {
  state = {
    // derived from app component
    stateCounter: this.props.counter,
  };

  // use to verify that the value of props is updating or not.
  static getDerivedStateFromProps(props, state) {
    // it should called when the props update or else returns null
    if (props.counter !== state.stateCounter) {
      console.log("should call if condition is true", props, state);
      return { stateCounter: props.counter };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.stateCounter < 10) {
      return true;
    }
    console.log(nextProps, nextState);
    return false;
  }

  render() {
    return <div>{this.state.stateCounter}</div>;
  }
}
