import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    let text;
    this.state.secondsLeft > 0 ? text = <p>{this.state.secondsLeft} seconds left before I go boom!</p> : text = <p>Boom!</p>
    return (
      text
    )
  }
}

export default Bomb;