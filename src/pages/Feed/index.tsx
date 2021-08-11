import React, {useEffect, useState, useCallback} from 'react';

import api from '../../services/api';
import * as S from './styles';
import List from '../../components/List';
import Input from '../../components/Input';

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
  const [filteredFeed, setFilteredFeed] = useState<CharacterProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const loadFeed = useCallback(async () => {
    if (page === totalPages) {
      return;
    }
    setLoading(true);
    const response = await api.get(`character/?page=${page}`);

    setTotalPages(response.data.info.pages);
    setTotalCharacters(response.data.info.count);
    setFeed([...feed, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  }, [feed, page, totalPages]);

  const filterFeed = useCallback(async () => {
    setFilteredFeed([]);

    if (searchText === '') {
      return;
    }

    const response = await api.get(`character/?name=${searchText}`);

    setFilteredFeed(response.data.results);
  }, [searchText]);

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Listagem</S.Title>
        <S.CharactersCount>{totalCharacters} personagens</S.CharactersCount>
      </S.Header>
      <S.Content>
        <Input
          placeholder="Busque por um personagem"
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            filterFeed();
          }}
        />
        <List
          feed={filteredFeed ? filteredFeed : feed}
          loadFeed={loadFeed}
          loading={loading}
        />
      </S.Content>
    </S.Container>
  );
};

export default Feed;
