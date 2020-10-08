import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Card, Title, Paragraph, Subheading} from 'react-native-paper';

import colors from '../constants/colors';

const BlogScreen = ({route, navigation}) => {
  const {author, title, text, imageUrl} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Card style={styles.card}>
        <Card.Cover style={styles.img} source={{uri: imageUrl}} />
        <Card.Content>
          <Title style={styles.title}>{title}</Title>
          <Subheading style={styles.author}>{author}</Subheading>
          <Paragraph style={styles.para}>{text}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.MetallicSeaweed,
    marginBottom: '2%',
  },
  author: {
    color: colors.MetallicSeaweed,
    marginBottom: '2%',
  },
  para: {
    color: colors.DarkJungleGreen,
  },
  img: {
    marginBottom: '5%',
  },
});
