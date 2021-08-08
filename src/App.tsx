import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
