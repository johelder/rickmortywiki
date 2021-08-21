import React, {useContext} from 'react';
import {Linking, TouchableOpacity} from 'react-native';
import {useNavigation, RouteProp} from '@react-navigation/native';

import FavoritesContext from '../../Contexts/FavoritesContext';

import {CharacterProps} from '../Feed';

import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles';

interface Props {
  route: RouteProp<
    {
      params: {
        character: CharacterProps;
      };
    },
    'params'
  >;
}

const Details: React.FC<Props> = ({route}) => {
  const navigation = useNavigation();
  const {character} = route.params;
  const {favorites, handleFavorite} = useContext(FavoritesContext);

  const handleSearchGoogle = () => {
    const searchName = character.name.replace(' ', '+');
    Linking.openURL(`https://www.google.com/search?q=${searchName}`);
  };

  return (
    <S.Container>
      <S.ImageContainer source={{uri: character.image}}>
        <S.BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </S.BackButton>
      </S.ImageContainer>

      <S.DetailsContainer>
        <S.Header>
          <S.Name>{character.name}</S.Name>
          <TouchableOpacity
            onPress={() => handleFavorite(Number(character.id))}>
            <Icon
              name={
                favorites.includes(Number(character.id)) === true
                  ? 'heart'
                  : 'heart-outline'
              }
              size={28}
              color="#1e2047"
            />
          </TouchableOpacity>
        </S.Header>

        <S.Body>
          <S.Description>
            Species:{'\n'}
            <S.DescriptionValue>{character.species}</S.DescriptionValue>
          </S.Description>

          <S.Description>
            Gender:{'\n'}
            <S.DescriptionValue>{character.gender}</S.DescriptionValue>
          </S.Description>
        </S.Body>

        <S.Description>
          Location:{'\n'}
          <S.DescriptionValue>{character.location.name}</S.DescriptionValue>
        </S.Description>

        <S.Footer>
          <S.Description>
            Origin:{'\n'}
            <S.DescriptionValue numberOfLines={1}>
              {character.origin.name}
            </S.DescriptionValue>
          </S.Description>

          <S.Description>
            Status:{'\n'}
            <S.DescriptionValue status={character.status}>
              {character.status}
            </S.DescriptionValue>
          </S.Description>
        </S.Footer>
      </S.DetailsContainer>

      <S.SearchInGoogleButton onPress={handleSearchGoogle}>
        <S.Title>Buscar no google</S.Title>
      </S.SearchInGoogleButton>
    </S.Container>
  );
};
export default Details;
