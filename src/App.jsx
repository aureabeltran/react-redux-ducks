
import React from 'react';
import generateStore from './components/redux/store';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const store = generateStore()
  return (
    <Router>
        <Provider store={store}>
          <Switch>
            <Route path='/' exact>
            </Route>
          </Switch>
        </Provider>
    </Router>
  );
}

export default App;
