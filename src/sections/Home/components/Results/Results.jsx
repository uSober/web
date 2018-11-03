import * as React from 'react';
import './Results.css'

export class Results extends React.Component {
  render() {
    return (
      <div className='stack'>
        <h1>Results!</h1>
        {this.getResults()}
        <div className='instructions'>
        <p className='instruction'>This is where we say something about the app and its use for helping people.</p>
        <p className='instruction'>Step 1: Take a selfie so we can use feature recognition to identify visual indicators of inebriation.</p>
        <p className='instruction'>Step 2: Play a short game to give us an idea of your reaction time.</p>
        <p className='instruction'>Step 3: Something.</p>
        </div>

      </div>
    )
  }

  getResults () {
    return 0
  }
}

export default Results
