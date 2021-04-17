import React, {ReactChild} from 'react';
import {
  View,
  Text,
  StyleSheetProperties,
  TextStyle,
  TextProps,
} from 'react-native';

interface props {
  children: ReactChild;
  style?: TextStyle;
  lightMode?: boolean;
  numberOfLines?: number;
  props?: any;
}

const text: React.FC<props> = ({
  children,
  lightMode = false,
  style,
  ...props
}) => {
  return (
    <Text style={{color: lightMode ? '#000' : '#fff', ...style}} {...props}>
      {children}
    </Text>
  );
};

export default text;
