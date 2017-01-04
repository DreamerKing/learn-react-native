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

import Strong from './src/commom/Strong';
import Blink from './src/commom/Blink';
import Girl from './src/components/Girl';
import styles from './src/commom/style';

export default class DK extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to <Blink>DreamerKing</Blink>!{'\n'}
          Hello <Strong style={styles.strong}>DreamerKing</Strong>
        </Text>
        <Girl source={require('./image/meinv.jpg')}
              style={styles.image}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('DK', () => DK);
