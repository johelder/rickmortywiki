import React from 'react';

import {CharacterProps} from '../../pages/Feed';

import * as S from './styles';

interface CardProps {
  character: CharacterProps;
}

const Card: React.FC<CardProps> = ({character}) => (
  <S.Container>
    <S.CharacterImage source={{uri: character.image}} />

    <S.Content>
      <S.Name>{character.name}</S.Name>
      <S.Key>
        Species: {'\n'}
        <S.Value>{character.species}</S.Value>
      </S.Key>
      <S.Key>
        Origin: {'\n'}
        <S.Value>{character.origin.name}</S.Value>
      </S.Key>

      <S.HeartIcon name="heart-outline" size={20} color="#1e2047" />
    </S.Content>
  </S.Container>
);

export default Card;
