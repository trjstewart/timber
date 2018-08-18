import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import './App.css';

import HomeRoute from './routes/Home';
import SwipeRoute from './routes/Swipe';
import Page404 from './routes/404';

class App extends Component {
  render() {
    const ApolloNetworkInstance = createNetworkInterface({
      uri: "localhost:8080",
    });

    const ApolloClientInstance = new ApolloClient({
      networkInterface: ApolloNetworkInstance,
    });

    return (
      <div className="App">
      <ApolloProvider client={ApolloClientInstance}>
        <Router>
          <div>
            <div className="App-body">
              <Switch>
                <Route exact path="/" component={HomeRoute} />
                <Route path="/swipe" component={SwipeRoute} />
                <Route component={Page404} />
              </Switch>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    </div>

    );
  }
}

export default App;
