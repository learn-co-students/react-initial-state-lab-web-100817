// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component{
  constructor(props){
    super(props);
    console.log(props)
    // debugger;
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    console.log('seconds left: ', this.state.secondsLeft)
    return(
      <div>
        <p>{this.state.secondsLeft > 0 ? this.state.secondsLeft + " seconds left before I go boom!" : 'Boom!'}</p>
      </div>
    )
  }
}

export default Bomb;
