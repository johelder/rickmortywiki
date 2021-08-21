import React from 'react';
import {FlatList, View} from 'react-native';

import {CharacterProps} from '../../pages/Feed/';

import Card from '../Card';

import * as S from './styles';
interface ListProps {
  feed: CharacterProps[];
  loadFeed?: () => void;
  canLoad?: boolean;
}

const List: React.FC<ListProps> = ({feed, loadFeed, canLoad}) => {
  return (
    <FlatList
      data={feed}
      keyExtractor={item => item.id}
      renderItem={({item: character}) => <Card character={character} />}
      onEndReachedThreshold={0.1}
      onEndReached={loadFeed}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        canLoad ? <S.Loading size="small" color="#1e2047" /> : <View />
      }
    />
  );
};

export default List;
