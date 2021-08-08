import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin: 0 auto 40px;

  background: #1e2047;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Medium';
  color: #fff;
  margin-right: 14px;
`;
