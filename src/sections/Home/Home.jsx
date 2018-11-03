import * as React from 'react';
import { Button, Icon } from 'antd';
import './Home.css'

import {ReactionTime, SelfieClassifier, Survey} from './components'

export class Home extends React.Component {
  state = {
    step: 1
  }
  render() {
    const {step} = this.state
    let curr = null
    switch(step){
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
      <div className='mainContainer'>
        <div className='location'>
          This is the Home
          {curr}
          <div>
          <Button.Group size='small'>
          <Button type="primary" onClick={this.prevStep}>
              <Icon type="left" />Backward
            </Button>
            <Button type="primary" onClick={this.nextStep}>
              Forward<Icon type="right" />
            </Button>
          </Button.Group>
          </div>
        </div>
      </div>
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
