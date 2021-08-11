import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border-radius: 6px;

  margin-top: -30px;

  flex-direction: row;
  align-items: center;
`;
export const Input = styled.TextInput``;

export const SearchIcon = styled(Icon)`
  margin: 0 15px;
`;
