import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import FavoritesContext from '../../Contexts/FavoritesContext';

import {RootStackParamList} from '../../routes';
import {CharacterProps} from '../../pages/Feed';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import * as S from './styles';

interface CardProps extends TouchableOpacityProps {
  character: CharacterProps;
}

type DetailsScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

const Card: React.FC<CardProps> = ({character}) => {
  const navigation = useNavigation<DetailsScreenProps>();
  const [isLiked, setIsLiked] = useState(false);
  const {favorites, handleFavorite} = useContext(FavoritesContext);

  return (
    <S.Container onPress={() => navigation.navigate('Details', {character})}>
      <S.CharacterImage source={{uri: character.image}} />

      <S.Content>
        <S.Name numberOfLines={1}>{character.name}</S.Name>
        <S.Description>
          Species: {'\n'}
          <S.DescriptionValue>{character.species}</S.DescriptionValue>
        </S.Description>
        <S.Footer>
          <S.Description numberOfLines={1}>
            Origin: {'\n'}
            <S.DescriptionValue>{character.origin.name}</S.DescriptionValue>
          </S.Description>

          <TouchableOpacity
            onPress={() => {
              setIsLiked(!isLiked);
              handleFavorite(Number(character.id));
            }}>
            <S.HeartIcon
              name={
                favorites.includes(Number(character.id)) === true
                  ? 'heart'
                  : 'heart-outline'
              }
              size={24}
              color="#1e2047"
            />
          </TouchableOpacity>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default Card;
