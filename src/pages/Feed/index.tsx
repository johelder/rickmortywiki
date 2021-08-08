import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, Text} from 'react-native';
import Card from '../../components/Card';
import api from '../../services/api';

import * as S from './styles';

interface CharacterProps {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
}

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<CharacterProps[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadFeed = async (currentPage = page) => {
      const response = await api.get(`character/?page=${currentPage}`);

      setFeed(response.data.results);
    };

    loadFeed();
  }, [page]);

  console.log(feed);

  return (
    <S.Container>
      <S.Content>
        <FlatList
          data={feed}
          keyExtractor={item => item.id}
          renderItem={({item: character}) => <Card character={character} />}
        />
      </S.Content>
    </S.Container>
  );
};

export default Feed;
