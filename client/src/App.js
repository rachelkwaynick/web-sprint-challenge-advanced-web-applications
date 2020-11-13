import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";
import { axiosWithAuth } from "./utilities/axiosWithAuth";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    ///logout code here
  }

  return (
    <Router>
      <div className="App">
        <ul>
          {!isLoggedIn ? <li><Link to='/login'>Login</Link></li> : <div></div>}

          <li>
            <Link to='#' onClick={logout}>Logout</Link>
          </li>

          {isLoggedIn ? <li><Link to=''>Colors List</Link></li> : <div></div>}
        </ul>
      <Switch>
          <PrivateRoute path='/bubblepage' component={BubblePage}/>  
      </Switch>
        <Route exact path="/login" render={(props) => {
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}


      </div>
    </Router>
  );
}

export default App;
