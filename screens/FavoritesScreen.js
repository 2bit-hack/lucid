import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import BlogCard from '../components/BlogCard';

const FavoritesScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'My Favorites',
    });
  }, [navigation]);

  const headerHeight = useHeaderHeight();

  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <FlatList
      style={{marginTop: headerHeight}}
      data={favorites}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <BlogCard
          blog={itemData.item}
          pressHandler={() =>
            navigation.navigate('Blog', {
              blog: itemData.item,
            })
          }
        />
      )}
    />
  );
};

export default FavoritesScreen;
