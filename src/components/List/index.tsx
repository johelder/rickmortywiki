import React from 'react';
import {FlatList} from 'react-native';

import {CharacterProps} from '../../pages/Feed/';

import Card from '../Card';

interface ListProps {
  feed: CharacterProps[];
  loadFeed: () => void;
}

const List: React.FC<ListProps> = ({feed, loadFeed}) => (
  <FlatList
    data={feed}
    keyExtractor={item => item.id}
    renderItem={({item: character}) => <Card character={character} />}
    onEndReachedThreshold={0.1}
    onEndReached={loadFeed}
    showsVerticalScrollIndicator={false}
  />
);

export default List;
