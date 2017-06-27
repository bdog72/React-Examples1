import React, { Component } from 'react'

export default class BasicButton2 extends Component {
  onButtonClick = (evt) => {
    const btn = evt.target
    console.log(`The user clicked ${btn.name} ${btn.value}`)
  }
  render () {
    return <div>
      <h1>What do you think of react</h1>
      <h2>Click a button and check the console</h2>
      <button
        className='button'
        name='button-1'
        value='Awesome'
        onClick={this.onButtonClick}>
        Awesome
      </button>
      <button
        className='button'
        name='button-2'
        value='Fantastic'
        onClick={this.onButtonClick}>
        Fantastic
      </button>
    </div>
  }
}
