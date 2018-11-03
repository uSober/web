import * as React from 'react';
import './ReactionTime.css'

export class ReactionTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      color: '#4AA6FC',
      instructions: 'Tap to Start'
    };
    this.maxTaps = 10;
  }
  getRandomNumberBetween = (min, max) => {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  start = () => {
    this.changeToRed();
    setTimeout(this.changeToGreen, this.getRandomNumberBetween(1,2) * 1000);
  }
  end = () => {
    this.changeToBlue();
    this.setState({instructions: 'Information recorded!'})
    console.log(this.props.data)
    const mean = this.props.data.reduce((a, b) => { return a + b; })/this.props.data.length
    const variance = this.props.data.reduce((a, b) => { return Math.abs(a-mean) + b; })/this.props.data.length
    console.log(mean,variance)

  }
  changeToBlue = () =>  {
    this.setState({
      // color: '#4AA6FC',
      instructions: 'Tap to Start'
    });
  }
  changeToRed = () =>  {
    this.setState({
      color: '#D63D1B',
      instructions: 'Tap when screen turns green!',
      lastStartTime: Date.now(),
    });
  }
  changeToGreen = () => {
    this.setState({
      color: '#35CA4D',
      instructions: 'Tap!',
      lastStartTime: Date.now(),
    });
  }
  incrementCount = () => {
    this.setState(prevState => {
      return {count: this.state.count + 1}
    })
  }
  addReactionTime = (newTime) => {
    this.setState(prevState => ({
      reactionTimes: [...prevState.reactionTimes, newTime]
    }));
  }
  handleClick = (event) => {
    //If Blue
    if(this.state.color === '#4AA6FC') {
      this.start();
      //If Red
    } else if(this.state.color === '#D63D1B') {
      this.addReactionTime(Date.now() - this.state.lastStartTime);
      //If Green
    } else {
      this.incrementCount();
      this.addReactionTime(Date.now() - this.state.lastStartTime);
      if(this.state.count < this.props.maxTaps) {
        this.start();
      } else {
        this.end();
      }
    }
  }
  render() {
    return (
      <div style={{ background: this.state.color}} onClick={this.handleClick} id='gameArea'>
        {this.state.instructions}
      </div>
    )
  }
}

export default ReactionTime
