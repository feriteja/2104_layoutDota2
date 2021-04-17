import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Detail, Home} from '../../screens';

const Stack = createSharedElementStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{
            gestureEnabled: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 300}},
              close: {animation: 'timing', config: {duration: 300}},
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
