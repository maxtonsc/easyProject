import React, { Component } from 'react';
import {Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Container, Content, Icon } from 'native-base';

import { imgArray }from '../img/imgArray-Full';

const styles = StyleSheet.create({

  containerView:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  Info: {
    display:'flex',
    justifyContent:'flex-end',
    width:150,
  },
  SocialBox: {
    display:'flex',
  backgroundColor: "#f5f5f5",
  width:150,
  },
  social: {
    color: '#333333',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  Image: {
    width: 200,
    height: 200,
  },
});

const FourthScreen = (props) => {
  const { email, key, name, image,imgkey, twitter, fb} = props.navigation.state.params;
  const emailToken = 'mailto://' + email;
  return (
    <Container>
      <Content>
      <Image
        source={imgArray[imgkey]}
      />
      <View style={styles.containerView}>
      <View style={styles.SocialBox}>
        <Text style={styles.social}>Contact</Text>
        <Text>FB: {fb}</Text>
        <Text>Messenger</Text>
        <Text>Twitter: {twitter}</Text>
        <Text>Email: {email}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(emailToken)}>
        <Text> Email: {emailToken} </Text>
        </TouchableOpacity>
      </View>
      {/*  very temporary implementation, more for func than design!!!*/}
      <View style={styles.Info}>
        <Text style={styles.social}>Info Section</Text>
        <Text>FB</Text>
        <Text>Messenger</Text>
        <Text>Twitter</Text>
        <Text>Email: {email}</Text>

      </View>
    </View>
    <View>
      <Text style={styles.social}>Recent Bills</Text>
      <Text>FB</Text>
      <Text>Messenger</Text>
      <Text>Twitter</Text>
      <Text>Email: {email}</Text>
    </View>
    </Content>
    </Container>
  );
}


FourthScreen.navigationOptions = {
  title: 'Fourth Screen',
};

export default FourthScreen
