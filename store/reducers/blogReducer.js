import {ADD_BLOG, GET_BLOGS} from '../actions/blogActions';

const INITIAL_STATE = {
  allBlogs: [],
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {allBlogs: action.blogs};
    case ADD_BLOG:
      const blogToAdd = action.blog;
      return {...state, allBlogs: [...state.allBlogs, blogToAdd]};
    default:
      return state;
  }
};

export default blogReducer;
