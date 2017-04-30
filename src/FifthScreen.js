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
import { imgArray }from '../img/imgArray-Full';
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
      search: ''
    };
  }
  updateSearch(event){
    this.setState({search: event.target.value})
  }
  render()
  {
    //Code from online that works
    // let filteredMPS= this.props.mps.filter(

    // My code
    let filteredMPS = mps.filter(
      (mp) => {
        return mp;
        // if(this.state.search=="Amy, Adams"){
        //   return mp;
        // }
        //Code from online that works. However
        // return mp.name.indexOf(
        //   this.state.search) !==1;

      }
    );
    return(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <TextInput style={styles.searchButt}
            // onChangeText={search => this.setState({search})}
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
            {/* <TextInput style={styles.searchButt} */}
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <Content>
            {filteredMPS.map((mp) => (

              <ListItem avatar key={mp.key} onPress ={() =>
                this.navigate('FourthScreen' , {
                  email:mp.email,
                  name:mp.name,
                  image:mp.image,
                  imgkey:mp.imgkey,
                  key:mp.key,
                  twitter: mp.twitter,
                  fb: mp.fb,
                })}>
                <Left>
                  <Thumbnail source={imgArray[mp.imgkey]} />


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
