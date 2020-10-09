import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, Title, Paragraph, Subheading, Chip} from 'react-native-paper';

import colors from '../constants/colors';

const BlogCard = ({blog, pressHandler}) => {
  return (
    <Card style={styles.card} onPress={pressHandler}>
      <Card.Cover style={styles.img} source={{uri: blog.imageUrl}} />
      <Card.Content>
        <View style={styles.meta}>
          <Title numberOfLines={1} style={styles.title}>
            {blog.title}
          </Title>
          <Subheading numberOfLines={1} style={styles.author}>
            {blog.author}
          </Subheading>
          <Chip mode="outlined" style={styles.tag}>
            <Text style={styles.tagTxt}>{blog.tag}</Text>
          </Chip>
          <Paragraph style={styles.para} numberOfLines={3}>
            {blog.text}
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    margin: '5%',
    borderWidth: 1,
    borderColor: colors.MetallicSeaweed,
    elevation: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.MetallicSeaweed,
  },
  tag: {
    elevation: 2,
    borderColor: colors.SteelTeal,
    marginBottom: '5%',
  },
  tagTxt: {
    color: colors.SteelTeal,
  },
  author: {
    color: colors.MetallicSeaweed,
    marginBottom: '5%',
  },
  para: {
    color: colors.DarkJungleGreen,
    fontStyle: 'italic',
  },
  img: {
    marginBottom: '5%',
  },
  meta: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default BlogCard;
