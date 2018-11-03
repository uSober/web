import * as React from 'react';
import './BalanceTest.css'

export class BalanceTest extends React.Component {
  state = {
    event: {},
    data: [],
    isRecording: false
  }
  componentDidMount() {
    if(window.DeviceOrientationEvent){
      window.addEventListener("deviceorientation", this.orientation, false);
    }else{
      console.log("DeviceOrientationEvent is not supported");
    }
  }

  render() {
    const {alpha, beta, gamma} = this.state.event
    return (
      <div className='stack'>
        <h1><em>Balance</em></h1>
        <div className='instructions'>
          <p className='instruction'>This will measure your balance.</p>
          <p className='instruction'>Step 1: Stand on your left leg.</p>
          <p className='instruction'>Step 2: Extend arms out to the side with palms down.</p>
          <p className='instruction'>Step 3: Wait for completion sound.</p>
        </div>
        <div>
        <img alt='' width='100px' src='balance.svg' style={{ transform: `translate3d(${(gamma/180)*50}px, ${(Math.abs(beta)/180)*50}px, 0)` }}/>
        </div>
        Alpha: {Math.round(alpha)} <br/>
        Beta: {Math.round(beta)}<br/>
        Gamma: {Math.round(gamma)}<br/>
      </div>
    )
  }

  orientation = (event) => {
    const {alpha, beta, gamma} = event
    const {addData} = this.props 
    if (this.state.isRecording) {
      addData({alpha, beta, gamma})
    }
    this.setState({event: {alpha, beta, gamma}})
  }
}



export default BalanceTest
