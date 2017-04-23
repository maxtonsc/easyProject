import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
//
import { createStore } from 'redux';
import { connect,  Provider } from 'react-redux';

const TYPE_INPUTTED = 'TYPE_INPUTTED';
const typeInputted = (text) => ({
  type:TYPE_INPUTTED,
  text
})

const TextInputConnecter  = connect((state) => ({
  value: state.inputData
}), (dispatch) => ({
  onChangeText: (text) => {
    dispatch(typeInputted(text));
  }
}))(TextInput)

class TextInputMaxton extends Component {

  constructor(props) {
    super(props);
    this.store = createStore((state, action) => {
      return  {state}
    })
    this.state={text:''}
  }

  render() {
    return (
      <Provider store={this.store}>
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Hello"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding:10, fontSize:42}}>
          {this.state.text.split(' ').map((word) => word && 'LOL').join(' ')}
        </Text>
      </View>
     </Provider>
    );
  }
}
export default TextInputMaxton
AppRegistry.registerComponent('TextInputMaxton', () => 'TextInputMaxton');
