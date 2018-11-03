import * as React from 'react';
import './Home.css'

import {ReactionTime, SelfieClassifier, Survey} from './components'

export class Home extends React.Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='location'>
          This is the Home
          <ReactionTime/>
          <SelfieClassifier/>
          <Survey/>
        </div>
        
      </div>
    )
  }
}

export default Home
