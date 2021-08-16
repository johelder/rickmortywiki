import styled from 'styled-components/native';

interface DescriptionValueProps {
  status?: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 50%;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: #1e2047;
  border-radius: 50px;

  margin: 30px 0 0 20px;

  align-items: center;
  justify-content: center;
`;

export const DetailsContainer = styled.View`
  padding: 20px 20px;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const Body = styled(Header)`
  margin-right: 20px;
`;

export const Footer = styled(Body)`
  margin-top: 15px;
`;

export const Name = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: #333;
`;
export const Description = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #333;
`;

export const DescriptionValue = styled.Text<DescriptionValueProps>`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: ${({status}) =>
    status === 'Alive'
      ? '#4AC82A'
      : status === 'Dead'
      ? '#E91337'
      : status === 'unknown'
      ? '#FF9000'
      : '#333'};
`;

export const SearchInGoogleButton = styled.TouchableOpacity`
  background: #1e2047;
  flex: 1;

  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 22px;
  color: #fff;
`;
