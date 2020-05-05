import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Button, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../css/custom';

export default class HomeScreen extends Component {
  // navigationOptions 코드 추가
  static navigationOptions = {
    title: 'Lotto',
  };

  constructor() {
    super();
    this.state = {
      // This is our Default number value
      min: 1,
      max: 35,
      count: 7,
      numbers: 1,
      powerball: 1,
    };
  }

  getInputs = () => {
    //numbers
    this.setState({
      numbers: this.generateNumbers(
        this.state.min,
        this.state.max,
        this.state.count,
      ),
      powerball: this.generateNumbers(1, 20, 1),

    });
  };

  generateNumbers = (min, max, count) => {
    let set = new Set();

    // 6개의 번호 추출을 위한 반복
    while (set.size < count) {
      // 추출된 번호인지 확인
      let tmpNum = Math.floor(Math.random() * (max - min + 1) + min);
      if (!set.has(tmpNum)) {
        set.add(tmpNum);
      }
    }
    return Array.from(set);
  };

  getNumberRange = (t) => {
    if (t < 10) {
      return 1;
    }
    if (t >= 10 && t < 20) {
      return 2;
    }
    if (t >= 20 && t < 30) {
      return 3;
    }
    if (t >= 30 && t < 40) {
      return 4;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            source={require('../../images/powerball.png')}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <CustomButton
              buttonColor={'white'}
              titleColor={'#152f7d'}
              title={'Number Probability Setting'}
              onPress={() => alert('Number Probability Setting')}
            />
            <CustomButton />
            <View style={styles.explain}>
              <View
                style={{
                  backgroundColor: '#279761',
                  borderRadius: 80,
                  padding: '1%',
                }}>
                <Text style={{color: 'white', fontWeight: '400'}}>
                  Common Rank
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#19264c',
                  borderRadius: 80,
                  padding: '1%',
                  marginLeft: '1.5%',
                }}>
                <Text style={{color: 'white', fontWeight: '400'}}>
                  Overdue Rank
                </Text>
              </View>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'contain',
                  marginLeft: '-5%',
                }}
                source={require('../../images/check.png')}
              />
            </View>
          </View>
          <View style={styles.bodyContent}>
            <Text>body content 1234 </Text>


            <View style={styles.numbers}>
              <FlatList
                data={this.state.numbers}
                renderItem={({item}) => <View style={[
                  (this.getNumberRange(item) == 1) ? styles.color1 : styles.numberCircle,
                  (this.getNumberRange(item) == 2) ? styles.color2 : styles.numberCircle,
                  (this.getNumberRange(item) == 3) ? styles.color3 : styles.numberCircle,
                  (this.getNumberRange(item) == 4) ? styles.color4 : styles.numberCircle,
                  styles.numberslist]}><Text style={[
                  (this.getNumberRange(item) == 1) ? styles.color1 : styles.numberCircle,
                  (this.getNumberRange(item) == 2) ? styles.color2 : styles.numberCircle,
                  (this.getNumberRange(item) == 3) ? styles.color3 : styles.numberCircle,
                  (this.getNumberRange(item) == 4) ? styles.color4 : styles.numberCircle,
                  styles.numberCircle]}>{item}</Text></View>}
              />
            </View>

            <Text style={{marginBottom: 10, fontSize: 20}}>
              Random 7: {this.state.numbers}
            </Text>
            <Text style={{marginBottom: 10, fontSize: 20}}>
              Powerball: {this.state.powerball}
            </Text>
          </View>
          <View style={styles.bodyBottom}>
            <Text>body bottom</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#152f7d'}
            titleColor={'white'}
            title={'Random Numbers Generate'}
            onPress={this.getInputs}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b549f',
  },
  header: {
    width: '100%',
    padding: '5vh 0% 1vh 0%',
    height: '14%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: '70%',
  },
  bodyHeader: {
    height: '15%',
  },
  bodyContent: {
    backgroundColor: '#9aa9ff',
  },
  explain: {
    height: '30%',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    fontWeight: '400',
  },
  numbers: {
    fontWeight: '400',
  },
  numberslist:{
    width: 30,
    borderWidth: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberCircle: {
  },
  color1: {
    color: '#ffef65',
    backgroundColor: 'black',
  },
  color2: {
    color: '#0041ff',
    backgroundColor: 'white',
  },
  color3: {
    color: '#ff008c',
    backgroundColor: 'gray'
  },
  color4: {
    color: '#65e8ff',
    backgroundColor: 'black',
  },
  bodyBottom: {
    height: '10%',
    backgroundColor: '#9aa9ff',
  },
  footer: {
    height: '15%',
  },
});
