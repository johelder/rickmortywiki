import React from 'react';
import {Text, View} from 'react-native';

interface CardProps {
  character: {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    location: {
      name: string;
    };
    image: string;
  };
}

const Card: React.FC<CardProps> = ({character}) => (
  <View>
    <Text>{character.name}</Text>
  </View>
);

export default Card;
