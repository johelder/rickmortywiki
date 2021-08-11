import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  background: #f0f0f5;

  margin-top: 15px;
  border-radius: 6px;
`;

export const CharacterImage = styled.Image`
  width: 40%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
export const Content = styled.View`
  flex: 1;
  padding: 10px;
  position: relative;
`;
export const Name = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  color: #333333;
`;
export const Key = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Medium';
  width: 80%;
`;

export const Value = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: #555555;
`;

export const HeartIcon = styled(Icon)`
  align-self: flex-end;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
