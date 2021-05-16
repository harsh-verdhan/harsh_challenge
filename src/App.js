import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Home />
          )}
        />
        <Route
          exact
          path='/menu'
          render={() => (
            <Menu />
          )}
        />
        <Route
          exact
          path='/checkout'
          render={() => (
            <Checkout />
          )}
        />
      </Switch>
    </Router>

  );
}

export default App;
