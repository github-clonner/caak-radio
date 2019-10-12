import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform } from 'react-native';
import configureStore from './store/configureStore';
import AppContainerIOS from './containers/AppContainerIOS';
import AppContainerAndroid from './containers/AppContainerAndroid';

const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {
          Platform.OS === 'ios' ?
          <AppContainerIOS/> :
          <AppContainerAndroid/>
        }
      </Provider>
    )
  }
}

export default Root
