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
      <S.Name numberOfLines={1}>{character.name}</S.Name>
      <S.Key>
        Species: {'\n'}
        <S.Value>{character.species}</S.Value>
      </S.Key>
      <S.Footer>
        <S.Key numberOfLines={1}>
          Origin: {'\n'}
          <S.Value>{character.origin.name}</S.Value>
        </S.Key>

        <S.HeartIcon name="heart-outline" size={24} color="#1e2047" />
      </S.Footer>
    </S.Content>
  </S.Container>
);

export default Card;
