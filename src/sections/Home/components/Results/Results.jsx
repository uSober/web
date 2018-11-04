import * as React from 'react';
import './Results.css'

export class Results extends React.Component {
  state = {
    reaction: null
  }
  render() {
    if(this.state.reaction){
      this.getResults()
    }
    return (
      <div className='stack'>
        <h1><em>Results</em></h1>
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

    if(reactionData.length > 0){
      const myReactionMean = reactionData.reduce((a, b) => { return a + b; })/reactionData.length
      this.setState({reaction: ((myReactionMean - reactionAvg)/reactionSD)/maxDeviation*100})
    }
    
    if(reactionData.length > 0){
      const myBalanceMean = balanceData.reduce((a, b) => { return {gamma: a.gamma + b.gamma, beta: a.beta + b.beta, alpha: a.alpha + b.alpha}; })
      myBalanceMean.gamma = myBalanceMean.gamma/balanceData.length
      myBalanceMean.beta = myBalanceMean.beta/balanceData.length
      myBalanceMean.alpha = myBalanceMean.alpha/balanceData.alpha
      console.log('Balance Mean', myBalanceMean)

    }
    

    console.log(balanceData, reactionData, selfieData);

    // const balMean = this.props.data.reduce((a, b) => { return a + b; })/this.props.data.length

    return 0
  }
}

export default Results
