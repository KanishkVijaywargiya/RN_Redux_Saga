import React, { Component, Fragment } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Header from './src/components/Header';
import ImageGrid from './src/components/ImageGrid';
const { width } = Dimensions.get('window');

class App extends Component {
  render() {
    return (
      <View>
        <Fragment>
          <Header />
          <ImageGrid />
        </Fragment>
      </View>
    )
  }
}

export default App;