import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';
import StepsBase from './components/StepsBase';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginSuccesful from './components/LoginSuccessful';
import SignUpSaccesful from './components/SignUpSuccesful';

function App () {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path="/steps" component={StepsBase} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/logOut'component={LogOut} />
          <Route patch='./loginSuccesful' component={LoginSuccesful} />
          <Route patch='./singUpSuccesful' component={SignUpSaccesful}/>
          <Route path='/' component={Home} /> 
        </Switch>         
      </Router>
      </>
  )
}
export default App;