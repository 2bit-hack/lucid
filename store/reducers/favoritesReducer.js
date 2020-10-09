import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../actions/favoritesActions';

// TODO: Use Set or Object instead for faster lookup
const INITIAL_STATE = {
  favorites: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const favoriteBlog = action.blog;
      let idx = state.favorites.indexOf(favoriteBlog);
      if (idx !== -1) {
        return state;
      }
      return {...state, favorites: [...state.favorites, favoriteBlog]};
    case REMOVE_FROM_FAVORITES:
      const removeBlog = action.blog;
      idx = state.favorites.indexOf(removeBlog);
      if (idx === -1) {
        return state;
      }
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, idx),
          ...state.favorites.slice(idx + 1),
        ],
      };
    default:
      return state;
  }
};

export default favoritesReducer;
