import React, { Component } from 'react'

const CREDITCARD = 'CreditCard'
const BTC = 'Bitcoin'

class App extends Component {
  state = {
    payMethod: BTC
  }

  select = (choice) => {
    return (evt) => {
      this.setState({
        payMethod: choice
      })
    }
  }

  render () {
    return <div>
      <div className='switch'>
        <div className='choice'
          onClick={this.select(CREDITCARD)}>
          Creditcard
        </div>
        <div className='choice'
          onClick={this.select(BTC)}>
          Bitcoin
        </div>
        Pay with: {this.state.payMethod}
      </div>
    </div>
  }
}

export default App
