import React, { Component } from 'react'

export default class BasicButton3 extends Component {
  onFormSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.refs.name.value)
  }
  render () {
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <h2>Open up console to view the name you submit</h2>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            ref='name' />
          <input
            type='submit' />
        </form>
      </div>
    )
  }
}
