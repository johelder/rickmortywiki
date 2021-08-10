import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  background: #f0f0f5;

  margin: 15px 0;
  border-radius: 6px;
`;

export const CharacterImage = styled.Image`
  width: 40%;
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
`;

export const Value = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: #555555;

  border: 1px solid #f00;
`;

export const HeartIcon = styled(Icon)`
  position: absolute;
  right: 15px;
  bottom: 10px;
`;
