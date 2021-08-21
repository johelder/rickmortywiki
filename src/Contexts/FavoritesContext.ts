import {createContext} from 'react';

interface FavoritesContextProps {
  favorites: number[];
  handleFavorite: (character: number) => void;
}

const FavoritesContext = createContext({} as FavoritesContextProps);

export default FavoritesContext;
