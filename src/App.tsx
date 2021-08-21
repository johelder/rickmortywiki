import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

import FavoritesContext from './Contexts/FavoritesContext';

const App: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleFavorite = (characterId: number) => {
    if (favorites.includes(characterId)) {
      const filteredFavorites = favorites.filter(fav => fav !== characterId);
      setFavorites(filteredFavorites);
      return;
    }

    setFavorites([...favorites, characterId]);
  };

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <FavoritesContext.Provider value={{favorites, handleFavorite}}>
          <Routes />
        </FavoritesContext.Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
