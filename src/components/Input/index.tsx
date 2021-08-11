import React from 'react';

import * as S from './styles';

const Input: React.FC = () => (
  <S.Container>
    <S.SearchIcon name="search" size={20} color="#1e2047" />
    <S.Input
      placeholder="Busque por um personagem"
      autoCorrect={false}
      autoCapitalize="none"
    />
  </S.Container>
);

export default Input;
