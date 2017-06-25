import React, { Component } from 'react'

export default class BasicButton1 extends Component {
  onGreatClick = (evt) => {
    console.log('The user clicked button-1: great', evt)
  }

  onAmazingClick = (evt) => {
    console.log('The user clicked button-2: amazing', evt)
  }

  render () {
    return <div>
      <h1>What Do You Think Of React?</h1>
      <h2>Click a button and check the console</h2>
      <button
        name='button-1'
        value='great'
        onClick={this.onGreatClick}>
        Great
      </button>
      <button
        name='button-2'
        value='amazing'
        onClick={this.onAmazingClick}>
          Amazing
      </button>
    </div>
  }
}
