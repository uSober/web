import * as React from 'react';
import { Button, Icon } from 'antd';
import './Home.css'

import {Description, ReactionTime, SelfieClassifier, Survey} from './components'

export class Home extends React.Component {
  state = {
    step: 0
  }
  render() {
    const {step} = this.state
    let curr = null
    switch(step){
      case 0: 
        curr = <Description/>;
        break
      case 1:
        curr = <SelfieClassifier/>
        break
      case 2:
        curr = <ReactionTime/>
        break
      case 3:
        curr = <Survey/>
        break
      default:
        curr = null
    }

    return (
      <>
      <h1><em>uSober</em></h1>
      <div className='mainContainer'>
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
    const step = this.state.step%3 + 1
    this.setState({step})
  }
  prevStep = () => {
    const step = Math.max(1, this.state.step - 1)
    this.setState({step})
  }
}

export default Home
