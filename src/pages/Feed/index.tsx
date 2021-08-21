import React, {useEffect, useState, useCallback} from 'react';

import api from '../../services/api';

import List from '../../components/List';
import Input from '../../components/Input';
import Err from '../../components/Err';

import * as S from './styles';

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
  const [totalPages, setTotalPages] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [filteredFeed, setFilteredFeed] = useState<CharacterProps[] | any>();
  const [filteredPage, setFilteredPage] = useState(2);
  const [totalFilteredPage, setTotalFilteredPage] = useState(0);

  const [err, setErr] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const response = await api.get('character/');

        const data = [...response.data.results];
        setFeed(data);
        setTotalPages(response.data.info.pages);
        setTotalCharacters(response.data.info.count);
        setLoading(false);
        setErr('');
      } catch (error) {
        setErr('Não foi possível carregar os personagens.');
      }
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
      setErr('');
    } catch (error) {
      setErr('Não foi possível carregar mais personagens');
    }
  }, [page, feed, totalPages]);

  const filterFeed = useCallback(async () => {
    try {
      if (searchText === '') {
        setPage(1);
      }
      setLoading(true);
      const response = await api.get(`character/?name=${searchText}`);

      const data = [...response.data.results];
      setFilteredFeed(data);
      setTotalCharacters(response.data.info.count);
      setTotalFilteredPage(response.data.info.pages);
      setLoading(false);
      setErr('');
    } catch (error) {
      setErr('Personagem não encontrado.');
    }
  }, [searchText]);

  const updateFilteredFeed = useCallback(async () => {
    try {
      if (filteredPage > totalFilteredPage) {
        return;
      }

      const response = await api.get(
        `character/?page=${filteredPage}&name=${searchText}`,
      );

      setFilteredFeed([...filteredFeed, ...response.data.results]);
      setFilteredPage(filteredPage + 1);
      setErr('');
    } catch (error) {
      setErr('Não foi possível carregar mais personagens');
    }
  }, [filteredFeed, filteredPage, searchText, totalFilteredPage]);

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
          }}
          onSubmitEditing={filterFeed}
        />

        {err ? (
          <Err message={err} />
        ) : loading ? (
          <S.LoadingFeed size="small" color="#1e2047" />
        ) : filteredFeed ? (
          <List feed={filteredFeed} loadFeed={updateFilteredFeed} />
        ) : (
          <List feed={feed} loadFeed={updateFeed} />
        )}
      </S.Content>
    </S.Container>
  );
};

export default Feed;
