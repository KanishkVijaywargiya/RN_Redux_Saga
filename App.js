import React, { Component, Fragment } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store';


import Header from './src/components/Header';
import ImageGrid from './src/components/ImageGrid';
const { width } = Dimensions.get('window');

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <ImageGrid />
        </Fragment>
      </Provider>
    )
  }
}

export default App;