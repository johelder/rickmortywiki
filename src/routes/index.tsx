import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Feed from '../pages/Feed';
import Welcome from '../pages/Welcome';

const Navigation = createNativeStackNavigator();

const Routes: React.FC = () => (
  <Navigation.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Navigation.Screen name="Welcome" component={Welcome} />
    <Navigation.Screen name="Feed" component={Feed} />
  </Navigation.Navigator>
);

export default Routes;
