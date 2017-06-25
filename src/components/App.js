import React, { Component } from 'react'
import Components from './Components'
import BasicButton1 from './BasicButton1'
import BasicButton2 from './BasicButton2'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return <div>
      <App1 />
      <Router>
        <div>
          <ul>
            <li><Link to='/'>React Component</Link></li>
            <li><Link to='/ex2'>Basic Button 1</Link></li>
            <li><Link to='/ex3'>Basic Button 2</Link></li>
            <hr />
            <Route exact path='/' component={Ex1} />
            <Route path='/ex2' component={Ex2} />
            <Route path='/ex3' component={Ex3} />
          </ul>
        </div>
      </Router>
    </div>
  }
}

const Ex1 = () => (
  <div>
    <Components />
  </div>
)

const Ex2 = () => (
  <div>
    <BasicButton1 />
  </div>
)

const Ex3 = () => (
  <div>
    <BasicButton2 />
  </div>
)

const styles1 = {
  app: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 50
  }
}

class App1 extends Component {
  render () {
    return (
      <div style={styles1.app}>
        Welcome to React!
      </div>
    )
  }
}
