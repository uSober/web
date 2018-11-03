import * as React from 'react';
import './Results.css'

export class Results extends React.Component {
  render() {
    return (
      <div className='stack'>
        <h1>Results!</h1>
        {this.getResults()}
        <div className='instructions'>
        </div>
      </div>
    )
  }

  getResults () {
    const {balanceData, reactionData, selfieData} = this.props;
    console.log(balanceData, reactionData, selfieData)
    return 0
  }
}

export default Results
