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
        <p className='instruction'>Step 2: Extend arms out to the side with palms down.</p>
        <p className='instruction'>Step 3: Wait for completion sound.</p>
        </div>
        <img alt='' width='200px' src='balance.svg'/>
      </div>
    )
  }
}

export default BalanceTest
