import React from 'react';
import {Text} from 'react-native';

import {CharacterProps} from '../../pages/Feed';

import * as S from './styles';

interface CardProps {
  character: CharacterProps;
}

const Card: React.FC<CardProps> = ({character}) => (
  <S.Container>
    <S.CharacterImage source={{uri: character.image}} />

    <S.Content>
      <S.Name>
        <Text>{character.name}</Text>
      </S.Name>

      <S.Species>
        <Text>Species: {character.species}</Text>
      </S.Species>
      <S.Origin>
        <Text>Origin: {character.origin.name}</Text>
      </S.Origin>
    </S.Content>
  </S.Container>
);

export default Card;
