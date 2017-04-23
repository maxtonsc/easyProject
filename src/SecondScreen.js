import React, { Component } from 'react';
import {Alert,
  Button,
  Image,
  Linking,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Container, Content, Icon } from 'native-base';


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
  title: {
    color: '#333333',
  },
});

const SecondScreen = (props) => {


  const { email, key, name, party, pictureLarge} = props.navigation.state.params;

  const onButtonPress = () => {
  Alert.alert(email);
};
  return (
    <Container>
      <Content>
        {/*  very temporary implementation, more for func than design!!!*/}
      <View style={styles.containerView}>
      <View style={styles.SocialBox}>
        <Text style={styles.social}>Bill</Text>
        <Text>{name}</Text>
        <Text>Leader: {party}</Text>
        <Text>Info:--</Text>
        <Text>Find more info on</Text>
        {/* <Button
          onPress={() => Alert.alert((email)}
          title="Email alert"
        /> */}
        <Button
  onPress={onButtonPress}
  title="Press Me"
  accessibilityLabel="See an informative alert"
/>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL({email})}>
  {email}
  </Text>
      </View>
    </View>
    </Content>
    </Container>
  );
}


SecondScreen.navigationOptions = {
  title: 'Second Screen',
};

export default SecondScreen
