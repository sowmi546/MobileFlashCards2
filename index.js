// import { registerRootComponent } from 'expo';
//
// import App from './App';
//
// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(reducer,applyMiddleware(thunk))

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('main', () => Root);
