import React, { Component } from 'react'
import styles from '../styles/switch.css'
const CREDITCARD = 'CreditCard'
const BTC = 'Bitcoin'

const Choice = function (props) {
  const cssClasses = []

  if (props.active) {
    cssClasses.push(styles.active)
  }

  return (
    <div className='choice'
      onClick={props.onClick}>
      {/* // className={cssClasses}> */}
      {props.label}
    </div>
  )
}

export default class Components extends Component {
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
    return <div className='head'>
      <div className='switch'>
        <h1>Click Creditcard or Bitcoin</h1>
        <Choice
          className='choice1'
          onClick={this.select(CREDITCARD)}
          active={this.state.payMethod === CREDITCARD}
          label='Creditcard' />
        <Choice
          className='choice1'
          onClick={this.select(BTC)}
          active={this.state.payMethod === BTC}
          label='Bitcoin' />
        <hr />
        Paying with: {this.state.payMethod}
      </div>
    </div>
  }
}
