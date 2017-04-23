import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title,
  Thumbnail,
} from 'native-base';
import { users } from '../config/data';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <Container>
        <Content>
          {users.map((user) => (
            <ListItem>
              <Text>{user.email}</Text>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

export default Feed;
