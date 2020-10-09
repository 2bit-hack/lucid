import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';

import BlogCard from '../components/BlogCard';
import colors from '../constants/colors';

const BlogsListScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'All Scribbles',
    });
  }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          mode="text"
          color={colors.BeauBlue}
          icon="heart"
          onPress={() => navigation.navigate('Favorites')}
        />
      ),
    });
  }, [navigation]);

  const blogs = useSelector((state) => state.blogs.allBlogs);

  return (
    <FlatList
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

export default BlogsListScreen;
