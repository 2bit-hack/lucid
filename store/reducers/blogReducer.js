import {ADD_BLOG, GET_BLOGS, ADD_FAV, REMOVE_FAV} from '../actions/blogActions';

const INITIAL_STATE = {
  allBlogs: {},
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {...state, allBlogs: action.blogs};
    case ADD_BLOG:
      const blogToAdd = action.blog;
      return {
        ...state,
        allBlogs: {...state.allBlogs, ...blogToAdd},
      };
    case ADD_FAV:
      const idAdd = action.id;
      const newState = Object.assign({}, state.allBlogs);
      newState[idAdd].fav = true;
      return {
        ...state,
        allBlogs: newState,
      };
    case REMOVE_FAV:
      const idRemove = action.id;
      const newState_ = Object.assign({}, state.allBlogs);
      newState_[idRemove].fav = true;
      return {
        ...state,
        allBlogs: newState_,
      };
    default:
      return state;
  }
};

export default blogReducer;
