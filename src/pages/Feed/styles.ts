import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #c4c4c4;
`;

export const Content = styled.View`
  flex: 1;
  margin: 15px 15px;
`;

export const Header = styled.View`
  width: 100%;
  height: 125px;
  background: #1e2047;
  padding: 0 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  color: #ffffff;
`;
export const CharactersCount = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #c1c1c1;
`;

export const LoadingFeed = styled.ActivityIndicator`
  margin-top: 40px;
`;
