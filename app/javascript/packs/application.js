// app/javascript/packs/application.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Greeting from '../components/Greeting';
import store from '../store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/greeting" component={Greeting} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
