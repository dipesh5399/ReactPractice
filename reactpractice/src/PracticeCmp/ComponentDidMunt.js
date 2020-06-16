import React, { Component } from "react";

export default class ComponentDidMunt extends Component {
  //DidMount called when page is loading.

  // directly define state without using constructor
  state = {};

  // API should be call in this. render will call two times.
  componentDidMount() {
    // AJAX request or state update should occur. also set time interval and timeout methods.
    this.setState({ title: "React JS" });
    setTimeout(() => this.setState({ title: "ECMA Script" }), 3000);
  }

  render() {
    return <div>{this.state.title}</div>;
  }
}
