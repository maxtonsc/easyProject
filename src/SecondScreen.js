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
    fontWeight: 'bold',
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


  const { BillHistory, BillLeader, BillLink, BillName, BillStatus, key} = props.navigation.state.params;

  const onButtonPress = () => {
  Alert.alert(BillLink);
};
  return (
    <Container>
      <Content>
        {/*  very temporary implementation, more for func than design!!!*/}
      <View style={styles.containerView}>
      <View style={styles.SocialBox}>
        <Text style={styles.welcome}>Bill</Text>
        <Text>{BillName}</Text>
        <Text style={styles.welcome}>Current Bill status: </Text>
        <Text>{BillStatus}</Text>
        <Text style={styles.welcome}>MP in charge of the Bill:  </Text>
        <Text>{BillLeader}</Text>
        <Text style={styles.welcome}>Info:</Text>
        <Text>{BillHistory}</Text>
        <Text style={styles.welcome}>Find more info on:</Text>
        <Text>{BillLink}</Text>
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
      onPress={() => Linking.openURL({BillLink})}>
  {BillLink}
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
