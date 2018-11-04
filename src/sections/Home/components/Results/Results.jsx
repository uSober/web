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
    //const reactionAvg = 400
    //const reactionSD = 40
    const {balanceData, reactionData, selfieData} = this.props;
    console.log(balanceData, reactionData, selfieData);
    const myReactionMean = reactionData.reduce((a, b) => { return a + b; })/reactionData.length
    console.log(myReactionMean, myReactionMean )
    // const balMean = this.props.data.reduce((a, b) => { return a + b; })/this.props.data.length

    return 0
  }
}

export default Results
