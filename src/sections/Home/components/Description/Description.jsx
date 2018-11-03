import * as React from 'react';
import './Description.css'

export class Description extends React.Component {
  render() {
    return (
      <div className='stack'>
        <h1><em>Welcome to uSober!</em></h1>
        <p>This is where we say something about the app and its use for helping people.</p>
        <p>Step 1: Take a selfie so we can use feature recognition to identify visual indicators of inebriation.</p>
        <p>Step 2: Play a short game to give us an idea of your reaction time.</p>
        <p>Step 3: Something.</p>
        
      </div>
    )
  }
}

export default Description
