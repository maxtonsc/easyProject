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
import { mps } from '../config/mpdatafinal';
import { imgArray }from '../img/imageStore';
const styles = StyleSheet.create({

  searchButt:{
    width:200,
  },
});

class FifthScreen extends Component {
  // const FifthScreen  = (props) => {
  // const { navigate } = props.navigation;
  constructor(props){
    super(props);
    this.navigate= props.navigation.navigate;
    this.state = {
      search: 'Search',
    }
  }
  render()
  {
    return(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <TextInput style={styles.searchButt} placeholder={"Search"}
            onChangeText={search => this.setState({search})}
          />
            {/* <TextInput style={styles.searchButt} */}
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <Content>
            {mps.map((mp) => (

              <ListItem avatar key={mp.key} onPress ={() =>
                this.navigate('FourthScreen' , {
                  email:mp.email,
                  name:mp.name,
                  image:mp.image,
                  key:mp.key,
                  twitter: mp.twitter,
                  fb: mp.fb,
                })}>
                <Left>
                  <Thumbnail source={imgArray[0]} />
                </Left>
                <Body>
                  <Text> {mp.name} </Text>
                  <Text note>{mp.electorate}</Text>
                </Body>
                <Right>
                  <Text note>{mp.party}</Text>
                </Right>

              </ListItem>
            ))}
          </Content>
        </Container>
      );
    }

  }


  FifthScreen.navigationOptions = {
    title: 'Fifth Screen',
  };

  export default FifthScreen
