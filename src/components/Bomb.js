// Bomb Component Code Goes Here
import React, { Component } from "react";

class Bomb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    let returnText = "";
    if (this.state.secondsLeft === 0) {
      returnText = "Boom!";
    } else {
      returnText = `${this.state.secondsLeft} seconds left before I go boom!`;
    }

    return <p>{returnText}</p>;
  }
}

export default Bomb;
