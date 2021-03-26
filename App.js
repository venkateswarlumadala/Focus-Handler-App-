/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';

export default class FocusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftTopFocus: false,
      isLeftBottomFocus: false,
      isRightTopFocus: false,
      isRightBottomFocus: false
    };
  }

  onLeftTopPress = () => {
    this.setState({
      isLeftTopFocus: true,
      isLeftBottomFocus: false,
      isRightTopFocus: false,
      isRightBottomFocus: false
    }),
      this.alertMessage('you clicked the left top')
  }

  onLeftBottomPress = () => {
    this.setState({
      isLeftTopFocus: false,
      isLeftBottomFocus: true,
      isRightTopFocus: false,
      isRightBottomFocus: false
    }),
      this.alertMessage('you clicked the left bottom')
  }

  onRightTopPress = () => {
    this.setState({
      isLeftTopFocus: false,
      isLeftBottomFocus: false,
      isRightTopFocus: true,
      isRightBottomFocus: false
    }),
      this.alertMessage('you clicked the right top')
  }

  onRightBottomPress = () => {
    this.setState({
      isLeftTopFocus: false,
      isLeftBottomFocus: false,
      isRightTopFocus: false,
      isRightBottomFocus: true
    }),
      this.alertMessage('you clicked the right bottom')
  }

  alertMessage = (msg) => {
    ToastAndroid.show(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <TouchableOpacity style={!this.state.isLeftTopFocus ? styles.squareBox : styles.squareFocusBox} onPress={this.onLeftTopPress} />
            <Text style={styles.text}>LEFT TOP</Text>
            <TouchableOpacity style={!this.state.isLeftBottomFocus ? styles.squareBox : styles.squareFocusBox} onPress={this.onLeftBottomPress} />
            <Text style={styles.text}>LEFT BOTTOM</Text>
          </View>
          <View style={styles.box}>
            <TouchableOpacity style={!this.state.isRightTopFocus ? styles.squareBox : styles.squareFocusBox} onPress={this.onRightTopPress} />
            <Text style={styles.text}>RIGHT TOP</Text>
            <TouchableOpacity style={!this.state.isRightBottomFocus ? styles.squareBox : styles.squareFocusBox} onPress={this.onRightBottomPress} />
            <Text style={styles.text}>RIGHT BOTTOM</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    flexDirection: 'column'
  },
  squareBox: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#044a94'
  },
  squareFocusBox: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#d11e15'
  },
  text: {
    textAlign: 'center'
  }
})