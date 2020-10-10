import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CreateBlogScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateBlogScreen</Text>
    </View>
  );
};

export default CreateBlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
