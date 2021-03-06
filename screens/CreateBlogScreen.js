import React, {useState} from 'react';
import {StyleSheet, ScrollView, Image, View, ToastAndroid} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

import * as blogActions from '../store/actions/blogActions';

import colors from '../constants/colors';

const CreateBlogScreen = ({navigation}) => {
  const headerHeight = useHeaderHeight();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          mode="text"
          color={colors.MetallicSeaweed}
          disabled={!(title.trim() && tag.trim() && text.trim())}
          onPress={async () => {
            try {
              await dispatch(
                blogActions.addBlog({
                  author: 'Random Guy',
                  authorId: '1',
                  title: title.trim(),
                  text: text.trim(),
                  imageUrl: url,
                  tag: tag.trim(),
                }),
              );
            } catch (err) {
              ToastAndroid.show(
                'Failed to connect to server :(',
                ToastAndroid.SHORT,
              );
            }

            setTitle('');
            setTag('');
            setUrl('');
            setText('');
          }}>
          <Icon name="save" size={20} />
        </Button>
      ),
    });
  }, [navigation, dispatch, title, text, url, tag]);

  return (
    <ScrollView
      style={{marginTop: headerHeight}}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Title"
          selectionColor={colors.BeauBlue}
          value={title}
          onChangeText={(title_) => setTitle(title_)}
        />
        <TextInput
          mode="outlined"
          label="Tag"
          selectionColor={colors.BeauBlue}
          value={tag}
          onChangeText={(tag_) => setTag(tag_)}
        />
        <Image
          source={{
            uri: url ? url : 'http://placeimg.com/640/480/nature/grayscale',
          }}
          style={styles.imageDisplay}
        />
        <TextInput
          mode="outlined"
          label="Image URL"
          selectionColor={colors.BeauBlue}
          value={url}
          onChangeText={(url_) => setUrl(url_)}
        />
        <TextInput
          mode="outlined"
          label="Text"
          selectionColor={colors.BeauBlue}
          value={text}
          onChangeText={(text_) => setText(text_)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    margin: '3%',
    padding: '1%',
  },
  formOptions: {
    marginHorizontal: '3%',
    paddingVertical: '1%',
  },
  imageDisplay: {
    height: 200,
    width: '100%',
    marginVertical: '3%',
  },
});

export default CreateBlogScreen;
