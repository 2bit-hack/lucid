import FIREBASE_URL from '../../keys';

export const GET_BLOGS = 'GET_BLOGS';
export const ADD_BLOG = 'ADD_BLOG';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const fetchBlogs = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${FIREBASE_URL}blogs.json`);

      if (!res.ok) {
        throw new Error('An error occurred!');
      }

      const resData = await res.json();

      dispatch({
        type: GET_BLOGS,
        blogs: resData,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const addBlog = (blog) => {
  return async (dispatch) => {
    const res = await fetch(`${FIREBASE_URL}blogs.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...blog, fav: false}),
    });

    const resData = await res.json();

    dispatch({
      type: ADD_BLOG,
      blog: {[resData.name]: blog},
    });
  };
};

export const addFav = (id) => {
  return async (dispatch) => {
    await fetch(`${FIREBASE_URL}blogs/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({fav: true}),
    });

    dispatch({
      type: ADD_FAV,
      id,
    });
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    await fetch(`${FIREBASE_URL}blogs/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({fav: false}),
    });

    dispatch({
      type: REMOVE_FAV,
      id,
    });
  };
};
