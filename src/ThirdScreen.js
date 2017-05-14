import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  Input,
  Item,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title,
  Thumbnail,
} from 'native-base';

import { bills } from '../config/billsdata';
// import { mps } from '../config/mpdatafinal';
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

class ThirdScreen extends Component {
  constructor(props){
    super(props);
    this.navigate= props.navigation.navigate;
    this.state = {
      search: 'Search',
    }
  }
  render()
  {
  return (
      <Container>
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <TextInput style={styles.searchButt} placeholder={"Search"}
                onChangeText={search => this.setState({search})}
              />
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
        </Header>
        <Content>
          {bills.map((bill) => (

            <ListItem key={bill.key} onPress ={() =>
              this.navigate('SecondScreen' , {BillName: bill.BillName,
                 BillStatus:bill.BillStatus, BillLeader:bill.BillLeader, BillLink:bill.BillLink,
                 BillHistory: bill.BillHistory, key:bill.key})}>
                <Text> {bill.BillName} </Text>
            </ListItem>
          ))}
        </Content>
      </Container>
  );
}
}

ThirdScreen.navigationOptions = {
  title: 'Third Screen',
};

export default ThirdScreen
