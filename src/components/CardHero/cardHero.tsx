import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {charrInfo} from '../../constant/interfaceProps/';

import {Gap, Text} from './../';

const {height, width} = Dimensions.get('screen');

const widthCard = width / 2 - 25;
const heightCard = widthCard + 40;

interface props {
  index?: number;
  item: charrInfo;
}

const cardHero: React.FC<props> = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('detail', {item, index});
      }}>
      <View style={[styles.card, {backgroundColor: item.baseColor}]}>
        <SharedElement id={`item.${index}.ava`}>
          <Image
            source={item.image}
            style={{
              height: heightCard,
              width: widthCard,
              resizeMode: 'contain',
              position: 'absolute',
              right: -35,
              top: -40,
            }}
          />
        </SharedElement>

        <View style={{position: 'absolute', bottom: 25, left: 15}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={
                item.type === 'Agility'
                  ? require('../../assets/attribute/agil.png')
                  : item.type == 'Intelligent'
                  ? require('../../assets/attribute/int.png')
                  : require('../../assets/attribute/strength.png')
              }
              style={{height: 20, width: 20, marginRight: 10}}
            />
            <Text>{item.type}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default cardHero;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#cadcad',
    alignSelf: 'stretch',
    width: widthCard,
    height: heightCard,
    // overflow: 'hidden',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginVertical: 10,
  },
});
