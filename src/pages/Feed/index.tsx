import React, {useEffect, useState, useCallback} from 'react';

import api from '../../services/api';
import * as S from './styles';
import List from '../../components/List';
import Input from '../../components/Input';

// import Err from '../../components/Err';

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
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [totalCharacters, setTotalCharacters] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [filteredFeed, setFilteredFeed] = useState<CharacterProps[] | null>(
    null,
  );

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const response = await api.get('character/');

      const data = [...response.data.results];
      setFeed(data);
      setTotalPages(response.data.info.pages);
      setTotalCharacters(response.data.info.count);
      setLoading(false);
    };
    getCharacters();
  }, []);

  const updateFeed = useCallback(async () => {
    try {
      if (page === totalPages) {
        return;
      }

      const response = await api.get(`character/?page=${page}`);

      const data = [...response.data.results];
      setFeed([...feed, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  }, [page, feed, totalPages]);

  const filterFeed = useCallback(async () => {
    if (searchText === '') {
      setPage(1);
    }
    setLoading(true);
    const response = await api.get(`character/?name=${searchText}`);

    const data = [...response.data.results];
    setFilteredFeed(data);
    setTotalCharacters(response.data.info.count);
    setLoading(false);
  }, [searchText]);

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
          onSubmitEditing={filterFeed}
        />

        {loading ? (
          <S.LoadingFeed size="small" color="#1e2047" />
        ) : filteredFeed ? (
          <List feed={filteredFeed} />
        ) : (
          <List feed={feed} loadFeed={updateFeed} />
        )}

        {}
      </S.Content>
    </S.Container>
  );
};

export default Feed;
