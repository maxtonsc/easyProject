import React, { Component } from 'react';
import {AppRegistry,Image,ListView, StyleSheet,Text,View} from 'react-native';
import MapView from 'react-native-maps';

// import {getDatabase} from './databaseJSON';

// import {getDatabase} from './database';
// var firebase = require('firebase');
// const textFINAL = getDatabase().ref('glossary');
// const database2 = getDatabase();
// var array1 = [];
// for (let prop in database2){
//   array1.push(database2[prop]);
// }





class  MapScreen extends Component{

  constructor(){
    super();
    this.state = {
    bills: ''
  };
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !==4){
      return;
    }
    if (request.status === 200){
      this.setState({bills: request.responseText});
    }
    else {
      console.warn('error',request.readyState);
    }
  }
  request.open('GET', 'https://maxtonsc.github.io/app.json');
  request.send();

};




render(){
  const textObj = "Hey";



  return (
// {/* <MapView */}
//     // style={styles.map}
//     // initialRegion={{
//     //   latitude: 37.78825,
//     //   longitude: -122.4324,
//     //   latitudeDelta: 0.0922,
//     //   longitudeDelta: 0.0421,
//     // }}
//   // />

  <View>
    <Image
      style={{width:50, height:50}}
      source ={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}

    />
    <Text> {this.state.bills}</Text>



  </View>
  );
}

}





MapScreen.navigationOptions = {
  title: 'Map Screen',
};

export default MapScreen
