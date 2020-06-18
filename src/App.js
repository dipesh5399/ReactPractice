import React, { Component } from "react";
import Constructor from "./PracticeCmp/Constructor";
import DidMount from "./PracticeCmp/component-did-mount-life-cycle";
//import GetDerivedState from "./PracticeCmp/get-derived-state-life-cycle";
import ComponentDidUpdate from "./PracticeCmp/component-did-update-life-cycle";
//import WillUnmount from "./PracticeCmp/component-will-unmount-life-cycle";
import SnapshotBeforeUpdate from "./PracticeCmp/get-snapshot-before-update-life-cycle";
import ErrorBoundary from "./PracticeCmp/error-boundary-life-cycle";
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
        <SnapshotBeforeUpdate
          onPropsUpdate={this.onIncreaseHandler}
          counter={this.state.counter}
        />
        <ErrorBoundary>
          <Constructor counter={0} />
        </ErrorBoundary>
        <Constructor counter={1} />
        <DidMount />
        {/* <ComponentDidUpdate counter={this.state.counter} /> */}
        <button onClick={this.onIncreaseHandler}>Increase</button>
        {/* <WillUnmount /> */}
      </div>
    );
  }
}
export default App;
