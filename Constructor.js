import React, { Component } from 'react'

export default class Constructor extends Component {

    constructor(props){   // There will be an error if we do not pass the props
        super(props);
        this.state = {    // state initialization
               counter: this.props.counter
        }
        this.onIncreaseHandler = this.onIncreaseHandler.bind(this); // binding metond to handle event. if not than gives error
    }

    onIncreaseHandler() {
        this.setState(state => ({
          counter: +this.state.counter + 1 // can't set value like +counter + 1. 
        }));
      }
    
    onDecreaseHandler = () => {  // We do not need to make a bind call if we use the arrow function
        this.setState(state => ({
          counter: +this.state.counter - 1
        }));
      }
    // We can use props directly outside the constructor
    render() {
        return (
            <div>
                <div>
                <p>{this.state.counter}</p>
                </div>
                    <button onClick={this.onIncreaseHandler}>Increase</button> 
                    {/* also bind like onClick={this.onIncreaseHandler.bind(this)} */}
                    <button onClick={this.onDecreaseHandler}>Decrease</button>
                
            </div>
        )
    }
}
