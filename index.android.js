/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TextInput from './src/commom/TextInputShow';
import Girl from './src/components/Girl';
import styles from './src/commom/style';

export default class DK extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput/>
        <Girl source={require('./image/meinv.jpg')}
              style={styles.image}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('DK', () => DK);
