import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import colors from './constants/colors';

import BlogsListScreen from './screens/BlogsListScreen';
import BlogScreen from './screens/BlogScreen';

import blogReducer from './store/reducers/blogReducer';
const rootReducer = combineReducers({
  blogs: blogReducer,
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.MetallicSeaweed,
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Blogs" component={BlogsListScreen} />
            <Stack.Screen name="Blog" component={BlogScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
