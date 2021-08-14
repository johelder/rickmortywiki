import React from 'react';

import * as S from './styles';

interface ErrProps {
  message: string;
}

const Err: React.FC<ErrProps> = ({message}) => (
  <S.Container>
    <S.ErrorMessage>{message}</S.ErrorMessage>
  </S.Container>
);

export default Err;
