import * as React from 'react';
import './Home.css'

import {ReactionTime, SelfieClassifier, Survey} from './components'

export class Home extends React.Component {
  render() {
    return (
      <div>
        This is the Home
        <ReactionTime/>
        <SelfieClassifier/>
        <Survey/>
      </div>
    )
  }
}

export default Home
