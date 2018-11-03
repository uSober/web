import * as React from 'react';
import './Description.css'

export class Description extends React.Component {
  render() {
    return (
      <div className='stack'>
        <h1>Welcome!</h1>
        <div className='instructions'>
        <p className='instruction'>This is where we say something about the app and its use for helping people.</p>
        <label>Step 1</label>
        <p className='instruction'>Take a selfie so we can use feature recognition to identify visual indicators of inebriation.</p>
        <label>Step 2</label>
        <p className='instruction'>Play a short game to give us an idea of your reaction time.</p>
        <label>Step 3</label>
        <p className='instruction'>Something.</p>
        </div>

      </div>
    )
  }
}

export default Description
