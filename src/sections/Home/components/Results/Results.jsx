import * as React from 'react';
import './Results.css'

export class Results extends React.Component {
  state = {
    reaction: null
  }
  render() {
    return (
      <div className='stack'>
        <h1><em>Results</em></h1>
        {!this.state.reaction && this.getResults()}
        {this.state.reaction}
        <div className='instructions'>
        </div>
      </div>
    )
  }

  getResults () {
    const reactionAvg = 400
    const reactionSD = 40
    const maxDeviation = 3
    const {balanceData, reactionData, selfieData} = this.props;
    console.log(balanceData, reactionData, selfieData);
    const myReactionMean = reactionData.reduce((a, b) => { return a + b; })/reactionData.length
    console.log(myReactionMean, ((myReactionMean - reactionAvg)/reactionSD)/maxDeviation*100)
    this.setState({reaction: ((myReactionMean - reactionAvg)/reactionSD)/maxDeviation*100})
    // const balMean = this.props.data.reduce((a, b) => { return a + b; })/this.props.data.length

    return 0
  }
}

export default Results
