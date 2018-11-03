import * as React from 'react';
import './BalanceTest.css'

export class BalanceTest extends React.Component {
  render() {
    return (
      <div className='stack'>
        <h1><em>Balance</em></h1>
        <div className='instructions'>
        <p className='instruction'>This will measure your balance.</p>
        <p className='instruction'>Step 1: Stand on your left leg.</p>
        <p className='instruction'>Step 2: Press start button.</p>
        <p className='instruction'>Step 3: Extend arms out to the side.</p>
        <p className='instruction'>Step 4: Wait for completion sound.</p>
        </div>
      </div>
    )
  }
}

export default BalanceTest
