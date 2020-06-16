import React, { Component } from "react";

export default class ComponentWillMount extends Component {
  state = {
    timerShow: true,
  };

  stopTimerClick = () => {
    this.setState({ timerShow: false });
  };

  render() {
    return (
      <div>
        {this.state.timerShow ? (
          <div>
            {" "}
            <Timer />
            <button onClick={this.stopTimerClick}>Close Counter</button>
          </div>
        ) : (
          alert("Timer component unmounted")
        )}
      </div>
    );
  }
}
class Timer extends Component {
  state = { timer: 0 };
  componentDidMount() {
    // set time interval to increase the value of the timer by 1 after 1s
    this.time = window.setInterval(() => {
      console.log("hello");
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    // useful to cancel any network request or timer,cleaning up subscription to created in DidMount
    window.clearInterval(this.time);
  }
  render() {
    return <div>{this.state.timer}</div>;
  }
}
