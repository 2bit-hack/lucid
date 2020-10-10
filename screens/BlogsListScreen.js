import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import BlogCard from '../components/BlogCard';

const BlogsListScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'All Blogs',
    });
  }, [navigation]);

  const headerHeight = useHeaderHeight();

  const blogs = useSelector((state) => state.blogs.allBlogs);

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

export default BlogsListScreen;
