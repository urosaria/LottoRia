import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class HomeScreen extends Component{
  // navigationOptions 코드 추가
  static navigationOptions = {
    title: 'Lotto',
  }

  constructor(){
    super();
    this.state={
      // This is our Default number value
      min: 1,
      max: 35,
      count: 6,
      number: 1,
      powerball: 1,
    };
  }

  getInputs =()=> {
    //numbers
    this.setState({
      number: this.generateNumbers(this.state.min, this.state.max, this.state.count),
      powerball: this.generateNumbers(1, 20, 1),
    })
  };

  generateNumbers = (min, max, count) => {
    let set = new Set();
    // 6개의 번호 추출을 위한 반복
    while(set.size < count) {
      // 추출된 번호인지 확인
      let tmpNum = Math.floor(Math.random() * (max - min + 1) + min);
      if (!set.has(tmpNum)) {
        set.add(tmpNum + '|');
      }
    }
    return set;
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10, fontSize: 20}}>Random 7: {this.state.number}</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>Powerball: {this.state.powerball}</Text>
        <Button title="Save me?" id="saveme" color="#0000ff" disabled={true} />
        <Button title="Generate Random Number" onPress={this.getInputs} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b549f',
  },

});
