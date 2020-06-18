import React, { Component } from "react";

export default class ShouldComponentUpdateLifeCycle extends Component {
  state = {
    // derived from app component
    stateCounter: this.props.counter,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.counter > prevProps.counter) {
      this.setState({
        stateCounter: prevState.stateCounter + 5,
      });
      console.log(prevProps, prevState);
    }
  }
  render() {
    return <div> {this.state.stateCounter}</div>;
  }
}
