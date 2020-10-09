export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (blog) => ({
  type: ADD_TO_FAVORITES,
  blog: blog,
});

export const removeFromFavorites = (blog) => ({
  type: REMOVE_FROM_FAVORITES,
  blog: blog,
});
