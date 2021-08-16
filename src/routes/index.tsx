import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Feed from '../pages/Feed';
import Welcome from '../pages/Welcome';
import Details from '../pages/Details';

const Navigation = createNativeStackNavigator();

const Routes: React.FC = () => (
  <Navigation.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Navigation.Screen name="Welcome" component={Welcome} />
    <Navigation.Screen name="Feed" component={Feed} />
    <Navigation.Screen name="Details" component={Details} />
  </Navigation.Navigator>
);

export default Routes;
