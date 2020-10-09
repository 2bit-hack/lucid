// dummy data for now
import BLOGS from '../../dummy-data/dummy-data';

const INITIAL_STATE = {
  allBlogs: BLOGS,
};

const blogReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default blogReducer;
