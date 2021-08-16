import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles';

const Details: React.FC = ({route}) => {
  const navigation = useNavigation();
  const {character} = route.params;

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
          <Icon name="heart-outline" size={26} color="#1e2047" />
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
