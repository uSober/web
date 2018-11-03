import * as React from 'react';
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
        curr = SelfieClassifier
        break
      case 2:
        curr = ReactionTime
        break
      case 3:
        curr = Survey
        break
      default:
        curr = null
    }

    return (
      <div className='mainContainer'>
        <div className='location'>
          This is the Home
          {curr}
        </div>
        
      </div>
    )
  }
}

export default Home
