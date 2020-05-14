import './App.css'

import React, {Component} from 'react'
// import CounterComponent  from './modules/counter3';
// import CounterComponent from './modules/context';
import FriendListItem from './modules/friends/FriendListItem'
// import Context from './modules/useContext'
import Context from './modules/useContext/app'

import Counter from './modules/useReducer'
class App extends Component {
  render() {
    return <div className="App">
      {/* <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">React</span></h2>
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={require('./react.svg')}/>
        <p>Edit <code>src/App.js</code> and save to hot reload your changes.</p>
      </div> */}

      {/* <CounterComponent {...{friend: {
        id: 123
      }}} /> */}
      <Context />
      <Counter ></Counter>
    </div>
  }
}

export default App
