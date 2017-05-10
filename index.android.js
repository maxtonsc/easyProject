/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import App from './src/App'
import SecondScreen from './src/SecondScreen'
import ThirdScreen from './src/ThirdScreen'
import FourthScreen from './src/FourthScreen'
import FifthScreen from './src/FifthScreen'
import MapScreen from './src/MapScreen'
import {
  StackNavigator
} from 'react-navigation';




export default class easyProject extends Component {

  render() {

    return (
      <App navigation={ navigation}/>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: App},
  SecondScreen: { screen: SecondScreen},
  ThirdScreen: { screen: ThirdScreen},
  FourthScreen: { screen: FourthScreen},
  FifthScreen: { screen: FifthScreen},
  MapScreen: { screen: MapScreen},
});



AppRegistry.registerComponent('easyProject', () => SimpleApp);
