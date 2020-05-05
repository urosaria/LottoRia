import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class CustomButton extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
        onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor}
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
  },
});
