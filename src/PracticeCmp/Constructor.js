import React, { Component } from "react";

export default class Constructor extends Component {
  // There will be an error if we do not pass the props
  constructor(props) {
    super(props);

    // state initialization
    this.state = {
      counter: this.props.counter,
    };

    // binding method to handle event. if not than gives error
    this.onIncreaseHandler = this.onIncreaseHandler.bind(this);
  }

  // if you cancel the error shown than you able to see the msg written from error boundary and other rendered component.
  noNegative = () => {
    if (this.state.counter === 0) {
      throw new Error("no negative excepted.");
    }
  };
  componentDidMount() {
    this.noNegative();
  }
  onIncreaseHandler() {
    this.setState((state) => ({
      // can't set value like counter + 1.
      counter: this.state.counter + 1,
    }));
  }

  // We do not need to make a bind call if we use the arrow function
  onDecreaseHandler = () => {
    this.setState((state) => ({
      counter: this.state.counter - 1,
    }));
  };
  // We can use props directly outside the constructor
  render() {
    return (
      <div>
        <div>
          <p>{this.state.counter}</p>
        </div>
        {/* also bind like onClick={this.onIncreaseHandler.bind(this)} */}
        <button onClick={this.onIncreaseHandler}>Increase</button>
        <button onClick={this.onDecreaseHandler}>Decrease</button>
      </div>
    );
  }
}
