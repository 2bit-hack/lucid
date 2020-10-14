import React from 'react';
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator, useHeaderHeight} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

import colors from './constants/colors';

import BlogsListScreen from './screens/BlogsListScreen';
import BlogScreen from './screens/BlogScreen';
import CreateBlogScreen from './screens/CreateBlogScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import blogReducer from './store/reducers/blogReducer';
import {StatusBar} from 'react-native';
const rootReducer = combineReducers({
  blogs: blogReducer,
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.MetallicSeaweed,
    accent: colors.MidBlueGreen,
  },
};

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// nested drawer navigator config
function DrawerOverview({navigation}) {
  const headerHeight = useHeaderHeight();

  return (
    <Drawer.Navigator
      initialRouteName="Blogs"
      drawerStyle={{
        paddingTop: headerHeight,
      }}
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
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <StatusBar
            backgroundColor={colors.MetallicSeaweed}
            barStyle="light-content"
          />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                // headerStyle: {
                //   backgroundColor: colors.MetallicSeaweed,
                // },
                headerTransparent: true,
                headerTintColor: colors.MetallicSeaweed,
                headerTitleAlign: 'center',
              }}>
              <Stack.Screen
                name="Home"
                component={DrawerOverview}
                options={({navigation}) => ({
                  headerLeft: () => (
                    <Button
                      color={colors.MetallicSeaweed}
                      onPress={() =>
                        navigation.dispatch(DrawerActions.toggleDrawer())
                      }>
                      <Icon name="bars" size={20} />
                    </Button>
                  ),
                  headerRight: () => (
                    <Button
                      color={colors.MetallicSeaweed}
                      onPress={() => navigation.navigate('Create')}>
                      <Icon name="pencil-square-o" size={20} />
                    </Button>
                  ),
                })}
              />
              <Stack.Screen name="Blog" component={BlogScreen} />
              <Stack.Screen name="Create" component={CreateBlogScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </PaperProvider>
    </>
  );
};

export default App;
