import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacityProps} from 'react-native';

import {CharacterProps} from '../../pages/Feed';

import * as S from './styles';

interface CardProps extends TouchableOpacityProps {
  character: CharacterProps;
}

const Card: React.FC<CardProps> = ({character}) => {
  const navigation = useNavigation();

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

          <S.HeartIcon name="heart-outline" size={24} color="#1e2047" />
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default Card;
