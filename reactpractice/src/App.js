import React, { Component } from "react";
import Constructor from "./PracticeCmp/Constructor";
import DidMount from "./PracticeCmp/component-did-mount-life-cycle";
//import GetDerivedState from "./PracticeCmp/get-derived-state-life-cycle";
import ShouldComponentUpdate from "./PracticeCmp/should-component-update-life-cycle";
import WillUnmount from "./PracticeCmp/component-will-unmount-life-cycle";
class App extends Component {
  state = {
    counter: 0,
  };

  onIncreaseHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Constructor counter={1} />
        <DidMount />
        <ShouldComponentUpdate counter={this.state.counter} />
        <button onClick={this.onIncreaseHandler}>Increase</button>
        <WillUnmount />
      </div>
    );
  }
}
export default App;
