import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import LoginOut from './components/LogOut';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App () {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />  
          <Route path='/logOut'component={LoginOut} />
        </Switch>         
      </Router>
      </>
  )
}
export default App;