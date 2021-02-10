import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App () {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/logOut'component={LogOut} />
          <Route path='/' component={Home} /> 
        </Switch>         
      </Router>
      </>
  )
}
export default App;