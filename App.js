import React, {useEffect} from 'react';
import {Button} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import colors from './constants/colors';

import BlogsListScreen from './screens/BlogsListScreen';
import BlogScreen from './screens/BlogScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import blogReducer from './store/reducers/blogReducer';
import favoritesReducer from './store/reducers/favoritesReducer';
const rootReducer = combineReducers({
  blogs: blogReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// nested drawer navigator config
function DrawerOverview({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      title: 'All Scribbles',
    });
  }, [navigation]);

  return (
    <Drawer.Navigator
      initialRouteName="Blogs"
      screenOptions={{
        headerTintColor: colors.MetallicSeaweed,
      }}>
      <Drawer.Screen name="Blogs" component={BlogsListScreen} />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{title: 'My Favorites'}}
      />
    </Drawer.Navigator>
  );
}

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
            <Stack.Screen name="Blogs" component={DrawerOverview} />
            <Stack.Screen name="Blog" component={BlogScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
