import * as React from 'react';
import { Button, Steps } from 'antd';
import './Home.css'

import {Description, ReactionTime, SelfieClassifier, BalanceTest, Results} from './components'

export class Home extends React.Component {
  state = {
    step: 0,
    selfieData: null,
    reactionData: [],
    balanceData: []
  }

  render() {
    const {step, selfieData, reactionData, balanceData} = this.state
    let curr = null
    switch(step){
      case 0:
        curr = <Description/>;
        break
      case 1:
        curr = <SelfieClassifier />
        break
      case 2:
        curr = <ReactionTime maxTaps={10}/>
        break
      case 3:
        curr = <BalanceTest data={balanceData} addData={this.addBalance} />
        break
      case 4:
        curr = <Results/>
      break
      default:
        curr = null
    }

    return (
      <>
      <header>
      <img className="logo" src='icons/icon-72x72.png' alt="Logo"/>
      </header>
      {/*<h1><img src='icons/icon-72x72.png' alt=''/><em>uSober</em></h1>*/}
      <div className='mainContainer'>
        <div className='steps' >
        <Steps initial={0} size='small' current={step}>
          <Steps.Step title="Disclaimer" description="Readme please 😊" />
          <Steps.Step title="Selfie" description="Ai on selfies 🤳" />
          <Steps.Step title="Speed Game" description="⚡Fast enough?" />
          <Steps.Step title="Balance" description="Left Leg only ⚖" />
          <Steps.Step title="Results" description="uSober bro? 🍺" />
        </Steps>
        </div>
        <div className='card'>
          {curr}
          <div className='footer'>
            <Button type="primary" size='large' icon="right" shape="circle" onClick={this.nextStep} />
          </div>
        </div>
      </div>
      </>
    )
  }
  nextStep = () => {
    const step = this.state.step%5 + 1
    this.setState({step})
  }
  prevStep = () => {
    const step = Math.max(0, this.state.step - 1)
    this.setState({step})
  }

  addBalance = (point) => {
    this.setState({balanceData: this.state.balanceData.concat(point)})
    console.log(this.state.balanceData.length)
  }
}

export default Home
