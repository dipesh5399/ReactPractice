import React, { Component } from "react";

export default class ComponentWillMountLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hello",
    };
  }
  // only life cycle method called on server rendering
  componentWillMount() {
    console.log("WillMount Called.");
    if (this.props.name === "") {
      // it is called before rendering so calling setState will not trigger extra rendering.
      this.setState({ name: "david" });
    }
  }
  componentDidMount() {
    console.log("DidMount Called");
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}
