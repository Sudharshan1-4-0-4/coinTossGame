// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    countHeads: 0,
    countTails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  gettingResult = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({countHeads: prevState.countHeads + 1}))
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({countTails: prevState.countTails + 1}))
    }
  }

  render() {
    const {count, countHeads, countTails, imageUrl} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <div>
            <button
              type="button"
              className="button"
              onClick={this.gettingResult}
            >
              Toss Coin
            </button>
          </div>
          <div className="results">
            <p>Total: {count}</p>
            <p>Heads: {countHeads}</p>
            <p>Tails: {countTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
