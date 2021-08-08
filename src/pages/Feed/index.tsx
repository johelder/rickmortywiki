import React, {useEffect, useState} from 'react';
import {useCallback} from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/Card';
import api from '../../services/api';

import * as S from './styles';

interface CharacterProps {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<CharacterProps[]>([]);
  const [page, setPage] = useState(1);

  const loadFeed = useCallback(async () => {
    const response = await api.get(`character/?page=${page}`);

    setFeed([...feed, ...response.data.results]);
    setPage(page + 1);
  }, [feed, page]);

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <S.Container>
      <S.Content>
        <FlatList
          data={feed}
          keyExtractor={item => item.id}
          renderItem={({item: character}) => <Card character={character} />}
          onEndReachedThreshold={0.1}
          onEndReached={loadFeed}
          showsVerticalScrollIndicator={false}
        />
      </S.Content>
    </S.Container>
  );
};

export default Feed;
