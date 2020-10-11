import FIREBASE_URL from '../../keys';

import Blog from '../../models/blog';

export const ADD_BLOG = 'ADD_BLOG';
export const GET_BLOGS = 'GET_BLOGS';

export const fetchBlogs = () => {
  return async (dispatch) => {
    const res = await fetch(`${FIREBASE_URL}blogs.json`);

    const resData = await res.json();
    const loadedBlogs = [];

    for (const key in resData) {
      loadedBlogs.push(
        new Blog(
          key,
          resData[key].blog.author,
          resData[key].blog.authorId,
          resData[key].blog.title,
          resData[key].blog.text,
          resData[key].blog.imageUrl,
          resData[key].blog.tag,
        ),
      );
    }

    dispatch({
      type: GET_BLOGS,
      blogs: loadedBlogs,
    });
  };
};

export const addBlog = (blog) => {
  return async (dispatch) => {
    const res = await fetch(`${FIREBASE_URL}blogs.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blog,
      }),
    });

    const resData = await res.json();

    dispatch({
      type: ADD_BLOG,
      blog: {...blog, id: resData.name},
    });
  };
};
