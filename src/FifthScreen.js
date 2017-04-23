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
import { mps } from '../config/dataEasy';
import { imgArray }from '../img/imageStore';
const styles = StyleSheet.create({

  searchButt:{
    width:200,
  },
});

// class FifthScreen extends Component {
const FifthScreen  = (props) => {
  const { navigate } = props.navigation;
  // constructor(){
  //   super();
  //   this.state = {
  //     search: 'Search'
  //   };

    return(
      <Container>
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                {/* <TextInput style={styles.searchButt} value={this.state.search}/> */}
                <TextInput style={styles.searchButt} />
                <Icon name="ios-people" />
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
        </Header>
        <Content>
          {mps.map((mp) => (

            <ListItem avatar key={mp.key} onPress ={() => navigate('FourthScreen' , {email:mp.email, name:mp.name, pictureLarge:mp.pictureLarge, key:mp.key})}>
              <Left>
                <Thumbnail source={imgArray[mp.key]} />
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




FifthScreen.navigationOptions = {
  title: 'Fifth Screen',
};

export default FifthScreen