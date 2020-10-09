import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Subheading,
  Chip,
  Button,
} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

import * as favoritesActions from '../store/actions/favoritesActions';
import colors from '../constants/colors';

const BlogScreen = ({route, navigation}) => {
  const {author, title, text, imageUrl, tag} = route.params.blog;

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);
  let idx = favorites.indexOf(route.params.blog);

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          mode="text"
          color={colors.BeauBlue}
          icon={idx === -1 ? 'heart' : 'heart-outline'}
          onPress={() => {
            idx === -1
              ? dispatch(favoritesActions.addToFavorites(route.params.blog))
              : dispatch(
                  favoritesActions.removeFromFavorites(route.params.blog),
                );
          }}
        />
      ),
    });
  }, [navigation, dispatch, route.params.blog, idx]);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Card style={styles.card}>
        <Card.Cover style={styles.img} source={{uri: imageUrl}} />
        <Card.Content>
          <View style={styles.meta}>
            <Title style={styles.title}>{title}</Title>
            <Subheading style={styles.author}>{author}</Subheading>
            <Chip mode="outlined" style={styles.tag}>
              <Text style={styles.tagTxt}>{tag}</Text>
            </Chip>
            <Paragraph style={styles.para}>{text}</Paragraph>
          </View>
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
  scroll: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.MetallicSeaweed,
    marginBottom: '3%',
  },
  author: {
    color: colors.MetallicSeaweed,
    marginBottom: '3%',
  },
  tag: {
    elevation: 2,
    borderColor: colors.SteelTeal,
    marginBottom: '3%',
  },
  tagTxt: {
    color: colors.SteelTeal,
  },
  para: {
    color: colors.DarkJungleGreen,
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
