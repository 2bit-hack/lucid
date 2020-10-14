import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import Blog from '../models/blog';
import BlogCard from '../components/BlogCard';

import * as blogActions from '../store/actions/blogActions';
import colors from '../constants/colors';
import {Subheading} from 'react-native-paper';

const BlogsListScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [err, setErr] = useState();
  const dispatch = useDispatch();

  const loadBlogsWithSpinner = useCallback(async () => {
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

  const loadBlogs = useCallback(async () => {
    setErr(null);
    try {
      await dispatch(blogActions.fetchBlogs());
    } catch (error) {
      console.log(error);
      setErr(error.message);
    }
  }, [dispatch, setErr]);

  useEffect(() => {
    const subscriber = navigation.addListener('focus', loadBlogs);

    return subscriber;
    // navigation won't change in a way to cause a rerender, at least for now
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadBlogs]);

  useEffect(() => {
    // set header options
    navigation.setOptions({
      title: 'All Blogs',
    });
    // also start fetching blogs
    setIsLoading(true);
    loadBlogs().then(() => {
      setIsLoading(false);
    });
  }, [navigation, dispatch, loadBlogs]);

  const headerHeight = useHeaderHeight();

  const blogs = useSelector((state) => state.blogs.allBlogs);

  const loadedBlogs = [];

  for (const key in blogs) {
    loadedBlogs.push(
      new Blog(
        key,
        blogs[key].author,
        blogs[key].authorId,
        blogs[key].title,
        blogs[key].text,
        blogs[key].imageUrl,
        blogs[key].tag,
        blogs[key].fav,
      ),
    );
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

  if (!isLoading && loadedBlogs.length === 0) {
    return (
      <View style={styles.activity}>
        <Subheading>No blogs found!</Subheading>
      </View>
    );
  }

  return (
    <FlatList
      style={{marginTop: headerHeight}}
      onRefresh={loadBlogsWithSpinner}
      refreshing={isRefreshing}
      data={loadedBlogs}
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

export default BlogsListScreen;
