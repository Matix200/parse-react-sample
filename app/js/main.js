import React from 'react'
import Parse from 'parse'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

Parse.initialize('cryptonsignals', 'sjkfbkbagrheilhjfgakebgafevdgkjaflsvdgkjav')
Parse.serverURL = 'https://cryptonsignals.herokuapp.com/parse'

/* Routes components */
import App from './components/App'
import Login from './components/Login'
import Todos from './components/Todos/Todos'

// Style
require('./../assets/styles/main.less')

const loginRequired = (nextState, replace) => {
  if (!Parse.User.current()) {
    replace('/login')
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <Route path='login' component={Login}/>
      <IndexRoute onEnter={loginRequired} component={Todos}/>
      <Route path='/todo/:todoId' component={Todos}/>
    </Route>
  </Router>
), document.getElementById('app'))
