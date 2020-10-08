import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import BlogCard from '../components/BlogCard';

const BlogsListScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'All Scribbles',
    });
  }, [navigation]);

  const blogs = useSelector((state) => state.blogs.allBlogs);

  return (
    <FlatList
      data={blogs}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <BlogCard
          author={itemData.item.author}
          title={itemData.item.title}
          text={itemData.item.text}
          imageUrl={itemData.item.imageUrl}
          pressHandler={() =>
            navigation.navigate('Blog', {
              author: itemData.item.author,
              title: itemData.item.title,
              text: itemData.item.text,
              imageUrl: itemData.item.imageUrl,
            })
          }
        />
      )}
    />
  );
};

export default BlogsListScreen;
