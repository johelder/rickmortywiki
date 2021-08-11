import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({placeholder, ...rest}) => (
  <S.Container>
    <S.SearchIcon name="search" size={20} color="#1e2047" />
    <S.Input
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
      {...rest}
    />
  </S.Container>
);

export default Input;
