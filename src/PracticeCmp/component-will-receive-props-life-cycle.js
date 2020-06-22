import React, { Component } from "react";

export default class ComponentWillReceiveProps extends Component {
  // if you only want to check that the received props value is changed/updated or not.please make sure to check changes else it will call all the time before mounted.
  // use component didUpdate life cycle instead.
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.arr);
    console.log(this.props.arr);
  }
  render() {
    return <div>[{this.props.arr + ","}]</div>;
  }
}
