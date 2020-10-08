import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Title, Paragraph, Subheading} from 'react-native-paper';

import colors from '../constants/colors';

const BlogCard = ({title, author, text, imageUrl, pressHandler}) => {
  return (
    <Card style={styles.card} onPress={pressHandler}>
      <Card.Cover style={styles.img} source={{uri: imageUrl}} />
      <Card.Content>
        <Title numberOfLines={1} style={styles.title}>
          {title}
        </Title>
        <Subheading numberOfLines={1} style={styles.author}>
          {author}
        </Subheading>
        <Paragraph style={styles.para} numberOfLines={3}>
          {text}
        </Paragraph>
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
  author: {
    color: colors.MetallicSeaweed,
  },
  para: {
    color: colors.DarkJungleGreen,
  },
  img: {
    marginBottom: '5%',
  },
});

export default BlogCard;
