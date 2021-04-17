import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {withDelay} from 'react-native-reanimated';
import {CardHero, Gap, Text} from '../components';
import data from '../assets/data';
import {useNavigation} from '@react-navigation/core';

const {height, width} = Dimensions.get('screen');

const widthCard = width / 2 - 25;
const heightCard = widthCard + 40;

const home = () => {
  const [indexCategory, setIndexCategory] = useState(0);

  const navigation = useNavigation();

  const category = ['All Hero', 'Popular'];

  return (
    <View style={{flex: 1, backgroundColor: '#0a0a0a'}}>
      <View style={styles.header}>
        <Text numberOfLines={2} style={{fontSize: 35, fontWeight: 'bold'}}>
          Learn your Favorite Hero
        </Text>
      </View>
      <Gap height={30} />
      <View style={styles.categories}>
        {category.map((value, i) => (
          <TouchableOpacity
            onPress={() => setIndexCategory(i)}
            key={i + 'category'}
            style={styles.categoryContainer}>
            <View>
              <Text>{value}</Text>
            </View>
            <View style={styles.outerDot}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      i == indexCategory ? '#ccaaaa' : 'transparent',
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Gap height={30} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginHorizontal: 0,
        }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          numColumns={2}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
            overflow: 'visible',
          }}
          contentContainerStyle={{
            overflow: 'visible',
            paddingVertical: 30,
            paddingBottom: heightCard + 30,
            paddingHorizontal: 20,
          }}
          style={{flex: 1}}
          ItemSeparatorComponent={() => <Gap width={10} height={20} />}
          keyExtractor={(a, i) => i.toString + 'keyCard' + a.name}
          renderItem={({item, index}) => {
            return <CardHero item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,

    paddingVertical: 20,
  },

  categoryContainer: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  categories: {flexDirection: 'row', paddingHorizontal: 20},
  outerDot: {
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    marginLeft: 10,
    height: 16,
    width: 16,
    borderColor: '#ccc',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    width: 10,

    borderRadius: 10,
  },
});
