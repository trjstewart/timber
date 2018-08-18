import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './routes/Home';
import Page404 from './routes/404';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>

    );
  }
}

export default App;
