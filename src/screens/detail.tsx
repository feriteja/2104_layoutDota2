import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {charrInfo} from '../constant/interfaceProps';
import {Gap, Text} from '../components';
import RadialGradient from 'react-native-radial-gradient';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {SharedElement} from 'react-navigation-shared-element';
import {
  LongPressGestureHandler,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import TrackPlayer from 'react-native-track-player';

const HeroStat = ({stat}: any) => {
  const at25 = stat.up * 25 + stat.base;
  const maxStat = 140;
  const perc = at25 / maxStat;
  const goWidth = perc * 250;

  const widthAnimation = useSharedValue(0);

  const animatedStye = useAnimatedStyle(() => {
    return {
      width: widthAnimation.value,
    };
  });

  useEffect(() => {
    widthAnimation.value = withTiming(goWidth, {duration: 2000});
  }, []);

  return (
    <View style={{marginVertical: 5}}>
      <View style={styles.textInfo}>
        <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>
          {stat.type}
        </Text>
        <Gap width={10} />
        <Text style={{color: '#12ff4C'}}>{at25}</Text>
        <Text>{` `}</Text>
        <Text>
          at 25 ({stat.base} + {stat.up}/Level)
        </Text>
      </View>
      <View
        style={{
          height: 10,
          borderRadius: 5,
          width: 250,
          backgroundColor: '#333',
          overflow: 'hidden',
        }}>
        <Animated.View
          style={[
            {
              height: 10,
              borderRadius: 5,
              backgroundColor: '#BE4C48',
            },
            animatedStye,
          ]}
        />
      </View>
    </View>
  );
};

const HeroSkill = ({data, index, opacityShare, seTskillSelected}: any) => {
  const opacityIcon = useSharedValue(1);

  const animatedStyeIcon = useAnimatedStyle(() => {
    return {opacity: opacityIcon.value};
  });

  return (
    <LongPressGestureHandler
      maxDist={100}
      onHandlerStateChange={({nativeEvent}) => {
        if (nativeEvent.state === State.BEGAN) {
          seTskillSelected(index);
          opacityIcon.value = 0.4;
        }
        if (nativeEvent.state === State.ACTIVE) {
          opacityShare.value = withTiming(1, {duration: 200});
        }
        if (nativeEvent.state === State.END) {
          opacityShare.value = withTiming(0, {duration: 200});
          opacityIcon.value = 1;
        }
        if (nativeEvent.state === State.FAILED) {
          opacityShare.value = withTiming(0, {duration: 200});
          opacityIcon.value = 1;
        }
      }}
      key={index + 'skills'}>
      <Animated.View
        key={index + 'skills'}
        style={[
          {justifyContent: 'center', alignItems: 'center'},
          animatedStyeIcon,
        ]}>
        <Image
          source={data.image}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginVertical: 5,
          }}
        />
        <Text style={{fontSize: 12}}>{data.name}</Text>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const detail = ({route}: any) => {
  const {item, index}: {item: charrInfo; index: number} = route.params;
  const [skillSelected, seTskillSelected] = useState(0);
  const opacityShare = useSharedValue(0);
  const randomCount = Math.round(Math.random());

  const animatedStye = useAnimatedStyle(() => {
    return {opacity: opacityShare.value};
  });

  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: item.sound[randomCount],
      title: 'Track Title',
      artist: 'Track Artist',
      // artwork: require('../assets/charr/axe/img/ava/ava.png'),
    });

    // Start playing it
    await TrackPlayer.play();
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}
      style={{flex: 1, backgroundColor: '#0a0a0a'}}>
      <View style={styles.header}>
        <IconEntypo name="chevron-left" size={25} color={'#fff'} />
      </View>
      <View style={styles.heroAvaContainer}>
        <RadialGradient
          style={{
            width: 400,
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          colors={[item.baseColor, '#0a0a0a']}
          stops={[0.1, 0.8]}
          center={[200, 200]}
          radius={200}>
          <SharedElement id={`item.${index}.ava`}>
            <Image
              source={item.image}
              style={{height: 400, width: 400, resizeMode: 'contain'}}
            />
          </SharedElement>
        </RadialGradient>
      </View>
      <View style={styles.detailInfo}>
        <View style={styles.role}>
          <Text>{item.roles}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{item.name}</Text>
          <Image
            source={
              item.type === 'Agility'
                ? require('../assets/attribute/agil.png')
                : item.type == 'Intelligent'
                ? require('../assets/attribute/int.png')
                : require('../assets/attribute/strength.png')
            }
            style={{marginLeft: 10, height: 40, width: 40, marginRight: 10}}
          />
        </View>
        <Gap height={20} />
        <View>
          <Text style={{color: '#BE4C48'}}>Hero Skills</Text>
          <View style={styles.skillsRow}>
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  bottom: 110,
                  right: 5,
                  left: 5,
                  borderRadius: 20,
                  backgroundColor: '#fff',
                  opacity: 1,
                },
                animatedStye,
              ]}>
              <Text lightMode={true} style={{fontSize: 15}}>
                {item.skills[skillSelected].effect}
              </Text>
            </Animated.View>
            {item.skills.map((data, i) => {
              return (
                <View key={i + 'heroskill'}>
                  <HeroSkill
                    index={i}
                    opacityShare={opacityShare}
                    data={data}
                    seTskillSelected={seTskillSelected}
                  />
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={{color: '#BE4C48'}}>Hero Stats</Text>
          {item.stats.map((stat, i) => {
            return (
              <View key={i + 'stat'}>
                <HeroStat stat={stat} />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

detail.sharedElements = (route, otherRoute, showing) => {
  const {index} = route.params;
  return [`item.${index}.bg`, `item.${index}.ava`];
};

export default detail;

const styles = StyleSheet.create({
  heroAvaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {height: 80, justifyContent: 'center', paddingHorizontal: 20},
  detailInfo: {paddingHorizontal: 20},
  role: {
    flexDirection: 'row',
    alignSelf: 'baseline',
    backgroundColor: '#BE4C48',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  skillsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  textInfo: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
