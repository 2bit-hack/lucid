import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, ToastAndroid} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Subheading,
  Chip,
  Button,
} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';

import * as blogActions from '../store/actions/blogActions';
import colors from '../constants/colors';

const BlogScreen = ({route, navigation}) => {
  const {author, title, text, imageUrl, tag, id, fav} = route.params.blog;

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title, dispatch]);

  const headerHeight = useHeaderHeight();

  const dispatch = useDispatch();

  const isFav = useSelector((state) => state.blogs.allBlogs)[id].fav;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          mode="text"
          color={colors.MetallicSeaweed}
          onPress={async () => {
            if (isFav) {
              try {
                await dispatch(blogActions.removeFav(id));
              } catch (err) {
                ToastAndroid.show(
                  'Failed to connect to server :(',
                  ToastAndroid.SHORT,
                );
              }
            } else {
              try {
                await dispatch(blogActions.addFav(id));
              } catch (err) {
                ToastAndroid.show(
                  'Failed to connect to server :(',
                  ToastAndroid.SHORT,
                );
              }
            }
            // isFav
            //   ? dispatch(blogActions.removeFav(id))
            //   : dispatch(blogActions.addFav(id));
            dispatch(blogActions.fetchBlogs());
          }}>
          <Icon name={isFav ? 'heart' : 'heart-o'} size={20} />
        </Button>
      ),
    });
  }, [navigation, dispatch, route.params.blog, fav, id, isFav]);

  return (
    <ScrollView
      style={{marginTop: headerHeight}}
      contentContainerStyle={styles.scroll}>
      <Card style={styles.card}>
        <Card.Cover
          style={styles.img}
          source={{
            uri: imageUrl
              ? imageUrl
              : 'http://placeimg.com/640/480/nature/grayscale',
          }}
        />
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
    flexGrow: 1,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    elevation: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
