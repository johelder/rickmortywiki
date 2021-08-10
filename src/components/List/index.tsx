import React from 'react';
import {FlatList} from 'react-native';

import {CharacterProps} from '../../pages/Feed/';

import Card from '../Card';

import * as S from './styles';

interface ListProps {
  feed: CharacterProps[];
  loadFeed: () => void;
  loading: boolean;
}

const List: React.FC<ListProps> = ({feed, loadFeed, loading}) => (
  <FlatList
    data={feed}
    keyExtractor={item => item.id}
    renderItem={({item: character}) => <Card character={character} />}
    onEndReachedThreshold={0.1}
    onEndReached={loadFeed}
    showsVerticalScrollIndicator={false}
    ListFooterComponent={
      loading ? <S.Loading size="small" color="#1e2047" /> : null
    }
  />
);

export default List;
