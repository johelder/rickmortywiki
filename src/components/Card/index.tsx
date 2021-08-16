import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {CharacterProps} from '../../pages/Feed';

import * as S from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';

interface CardProps extends TouchableOpacityProps {
  character: CharacterProps;
}

type DetailsScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

const Card: React.FC<CardProps> = ({character}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation<DetailsScreenProps>();

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

          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <S.HeartIcon
              name={isLiked ? 'heart' : 'heart-outline'}
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
