import React, {useEffect, useState, useCallback} from 'react';

import api from '../../services/api';
import * as S from './styles';
import List from '../../components/List';

export interface CharacterProps {
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
  const [totalPages, setTotalPages] = useState(0);

  const loadFeed = useCallback(async () => {
    if (page === totalPages) {
      return;
    }

    const response = await api.get(`character/?page=${page}`);

    setTotalPages(response.data.info.pages);
    setFeed([...feed, ...response.data.results]);
    setPage(page + 1);
  }, [feed, page, totalPages]);

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <S.Container>
      <S.Content>
        <List feed={feed} loadFeed={loadFeed} />
      </S.Content>
    </S.Container>
  );
};

export default Feed;
