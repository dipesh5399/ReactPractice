import React, { Component } from 'react'

export default class DerivedStateLifeCycle extends Component {

    state = {
        stateCounter: this.props.counter // derived from app componemt
    }

    static getDerivedStateFromProps(props,state){ // use to verify that the value of props is updating or not.
        if(props.counter !== state.stateCounter){ // it should called when the props update or else returns null
            console.log("should call if condition is true",props,state);
            return{ stateCounter: props.counter};
        }
        return null;
    }

   
    render() {
        return (
            <div>
                {this.state.stateCounter}
            </div>
        )
    }
}
