import React, { Component } from "react";

export default class ComponentWillUpdateLifeCycle extends Component {
  // shows that which props/state properties are updating.use componentDidUpdate instead.
  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps);
  }
  render() {
    return <div></div>;
  }
}
