import React, { Component } from 'react';
import Constructor from"./PracticeCmp/Constructor";
import Didmountcmpt from "./PracticeCmp/ComponentDidMunt";
import GetDerivedState from "./PracticeCmp/DerivedStateLifeCycle";

class App extends Component {

  state = {
    counter: 0
  }
  
  onIncreaseHandler = () => {
    this.setState({
        counter: 1
    })
  }


  render(){
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Constructor counter={1}/>
      <Didmountcmpt />
      <GetDerivedState counter={this.state.counter} />
      <button onClick={this.onIncreaseHandler}>Increase</button> 
    </div>
  );
}
}
export default App;




// import React, { Component } from 'react';
// // import './App.css';
// // import Loader from "./Components/Loader";
// // import Formtest from "./Components/Form";
// // import Buttontext from "./Components/Buttontext";
// class App extends Component {
//   // state={
//   //   name:"",
//   //   isLoading:true,
//   //   error:""
//   // }

//   // valueChangeHandler = event => {
//   //   //alert(event.target.value);
//   //   this.setState({ [event.target.name]: event.target.value})
//   // }

//   // isToggleLoadingHandler = () => {
//   //   this.setState({
//   //     isLoading: !this.state.isLoading
//   //   })
//   // }
//   //  submitHandler = () => {
//   //    this.setState({
//   //      error: this.state.name === "" ? "Enter Value" : (!this.state.name.match("^[A-Za-z]*$") ? "Invalid name" : "good to go!") });
//   // }
//   render(){
//   return (
//     <div className="App">
//       {/* <Loader onLoadClick={this.isToggleLoadingHandler} loadingStatus={this.state.isLoading}/>
//       <Formtest personName={this.state.name} errorMessage={this.state.error} 
//       onChange={this.valueChangeHandler} onSubmitClick={this.submitHandler}/>
//       <Buttontext/> */}
//     </div>
//   );
// }
// }
// export default App;
