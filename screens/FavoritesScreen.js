import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, View, ActivityIndicator, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import * as blogActions from '../store/actions/blogActions';

import colors from '../constants/colors';

import Blog from '../models/blog';
import BlogCard from '../components/BlogCard';

const FavoritesScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [err, setErr] = useState();
  const dispatch = useDispatch();

  const getFavesWithSpinner = useCallback(async () => {
    setErr(null);
    setIsRefreshing(true);
    try {
      await dispatch(blogActions.fetchBlogs());
    } catch (error) {
      console.log(error);
      setErr(error.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setErr]);

  const getFaves = useCallback(async () => {
    setErr(null);
    try {
      await dispatch(blogActions.fetchBlogs());
    } catch (error) {
      console.log(error);
      setErr(error.message);
    }
  }, [dispatch, setErr]);

  useEffect(() => {
    const subscriber = navigation.addListener('focus', getFaves);

    return subscriber;
  }, [navigation, getFaves]);

  useEffect(() => {
    // set header options
    navigation.setOptions({
      title: 'Favorites',
    });
    // also start fetching blogs
    setIsLoading(true);
    getFaves().then(() => {
      setIsLoading(false);
    });
  }, [navigation, dispatch, getFaves]);

  const headerHeight = useHeaderHeight();

  const favorites = useSelector((state) => state.blogs.allBlogs);
  let favoritesArr = [];

  for (const key in favorites) {
    if (favorites[key].fav) {
      favoritesArr.push(
        new Blog(
          key,
          favorites[key].author,
          favorites[key].authorId,
          favorites[key].title,
          favorites[key].text,
          favorites[key].imageUrl,
          favorites[key].tag,
          favorites[key].fav,
        ),
      );
    }
  }

  if (err) {
    return (
      <View style={styles.activity}>
        <Subheading>An error occurred!</Subheading>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.activity}>
        <ActivityIndicator size="large" color={colors.MetallicSeaweed} />
      </View>
    );
  }

  return (
    <FlatList
      style={{marginTop: headerHeight}}
      onRefresh={getFavesWithSpinner}
      refreshing={isRefreshing}
      data={favoritesArr}
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

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
