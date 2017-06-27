import React, { Component } from 'react'
import Components from './Components'
import BasicButton1 from './BasicButton1'
import BasicButton2 from './BasicButton2'
import BasicButton3 from './BasicButton3'
import SubmitForm from './SubmitForm'
import SubmitForm1 from './SubmitForm1'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return <div>
      <App1 />
      <Router>
        <div>
          <ul>
            <div className='routes'>
              <div>
                <li><Link to='/'>React Component</Link></li>
                <li><Link to='/ex2'>Basic Button 1</Link></li>
                <li><Link to='/ex3'>Basic Button 2</Link></li>
              </div>
              <div>
                <li><Link to='/ex4'>Submit Form</Link></li>
                <li><Link to='/ex5'>Submit Form 2</Link></li>
                <li><Link to='/ex6'>Submit Form 3</Link></li>
              </div>
            </div>
            <hr />
            <Route exact path='/' component={Ex1} />
            <Route path='/ex2' component={Ex2} />
            <Route path='/ex3' component={Ex3} />
            <Route path='/ex4' component={Ex4} />
            <Route path='/ex5' component={Ex5} />
            <Route path='/ex6' component={Ex6} />
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

const Ex4 = () => (
  <div>
    <BasicButton3 />
  </div>
)

const Ex5 = () => (
  <div>
    <SubmitForm />
  </div>
)

const Ex6 = () => (
  <div>
    <SubmitForm1 />
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
