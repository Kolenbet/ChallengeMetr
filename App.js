import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import thunk from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import ReactNativeRouter, { Route, Schema } from 'react-native-router-flux';
import reducers from './app/reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const Router = connect()(ReactNativeRouter.Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router hideNavBar={true}>
          <Route
            name="launch"
            component={Launch}
            initial={true}
            wrapRouter={true}
            title="Launch" />
          <Route
            name="counter"
            component={CounterApp}
            title="Counter App" />
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
