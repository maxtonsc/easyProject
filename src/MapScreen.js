import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right:0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right:0,
    bottom: 0,
  },
});

class  MapScreen extends Component{

  constructor(){
    super();
  }
render(){

  return (
<MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

  );
}

}





MapScreen.navigationOptions = {
  title: 'Map Screen',
};

export default MapScreen