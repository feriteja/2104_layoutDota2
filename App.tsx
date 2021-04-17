import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from './src/config/router';
import {enableScreens} from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
