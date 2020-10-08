import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import blogReducer from './store/reducers/blogReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <View>
              <Text>lucid</Text>
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
