/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import WelcomeScreen from './src/containers/WelcomeScreen'
import MainScreen from './src/containers/MainScreen'
import GameOverScreen from './src/containers/GameOverScreen'
import {createStackNavigator} from 'react-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = createStackNavigator(
  {
    Welcome:{screen:WelcomeScreen},
    Main:{screen:MainScreen},
    GameOver:{screen:GameOverScreen}
  },
  {
    initialRouteName: 'WelcomeScreen',
    // headerMode:'none',
    // navigationOptions:{
    //   headerVisible:false
    // }
  }
);

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack/>
      </View>
    );
  }
}

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
});

export default App
