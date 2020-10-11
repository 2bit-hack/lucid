import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import BlogCard from '../components/BlogCard';

import * as blogActions from '../store/actions/blogActions';
import colors from '../constants/colors';

const BlogsListScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // set header options
    navigation.setOptions({
      title: 'All Blogs',
    });
    // also start fetching blogs
    const loadBlogs = async () => {
      setIsLoading(true);
      await dispatch(blogActions.fetchBlogs());
      setIsLoading(false);
    };
    loadBlogs();
  }, [navigation, dispatch]);

  const headerHeight = useHeaderHeight();

  const blogs = useSelector((state) => state.blogs.allBlogs);

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
      data={blogs}
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
