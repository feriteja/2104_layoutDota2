import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

interface props {
  height?: number;
  width?: number;
  style?: ViewStyle;
}

const Gap = ({height = 0, width = 0, style = {}}) => {
  return <View style={[{height, width}, style]} />;
};

export default Gap;
