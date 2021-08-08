import React from 'react';
import {Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import backgroundImg from '../../assets/wallpaper.png';
import logo from '../../assets/logo.png';

import * as S from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Background source={backgroundImg}>
        <Image source={logo} />

        <S.SignInButton onPress={() => navigation.navigate('Feed')}>
          <S.Title>Prosseguir</S.Title>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </S.SignInButton>
      </S.Background>
    </S.Container>
  );
};

export default Welcome;
