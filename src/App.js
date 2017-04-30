import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';


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
const App = (props) => {
  const { navigate } = props.navigation;
  return (
  <View style={styles.container}>
    <Text style={styles.Welcome}>
      Testing Application  {'\n'}
    </Text>

    <Text style={styles.instructions}>
      Pretty decent so far
    </Text>
    <Button
      onPress={() => navigate('SecondScreen')}
      title="Go to Second Screen"
    />
    <Button
      onPress={() => navigate('ThirdScreen')}
      title="Go to Third Screen"
    />
    <Button
      onPress={() => navigate('FourthScreen')}
      title="Go to FourthScreen"
    />
    <Button
      onPress={() => navigate('FifthScreen')}
      title="Go to FifthScreen"
    />
    <Button
      onPress={() => navigate('MapScreen')}
      title="Go to MapScreen"
    />

  </View>
);
}

App.navigationOptions = {
  title: 'Home Screen',
};

export default App
