import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../actions/favoritesActions';

// TODO: Use Set or Object instead for faster lookup
const INITIAL_STATE = {
  favorites: {},
};

// TODO: Pass only id instead of entire blog
const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const favoriteBlog = action.blog;
      const idAdd = favoriteBlog.id;
      if (state.favorites[idAdd]) {
        return state;
      }
      return {...state, favorites: {...state.favorites, [idAdd]: favoriteBlog}};
    case REMOVE_FROM_FAVORITES:
      const removeBlog = action.blog;
      const idRemove = removeBlog.id;
      if (!state.favorites[idRemove]) {
        return state;
      }
      let newFavorites = Object.assign({}, state.favorites);
      delete newFavorites[idRemove];
      return {...state, favorites: newFavorites};
    default:
      return state;
  }
};

export default favoritesReducer;
