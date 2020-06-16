import React, { Component } from 'react';
import Constructor from"./PracticeCmp/Constructor";
import Didmountcmpt from "./PracticeCmp/ComponentDidMunt";
//import GetDerivedState from "./PracticeCmp/DerivedStateLifeCycle";
import ShouldComponentUpdate from "./PracticeCmp/ShouldComponentUpdateLifeCycle";
class App extends Component {

  state = {
    counter: 0
  }
  
  onIncreaseHandler = () => {
    this.setState({
        counter: this.state.counter+1
    })
  }


  render(){
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Constructor counter={1}/>
      <Didmountcmpt />
      <ShouldComponentUpdate counter={this.state.counter} />
      <button onClick={this.onIncreaseHandler}>Increase</button> 
    </div>
  );
}
}
export default App;




