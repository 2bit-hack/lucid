import Blog from '../models/blog';

const BLOGS = [
  new Blog(
    '1',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '2',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '3',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '4',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '5',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '6',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '7',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '8',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '9',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
  new Blog(
    '10',
    'Random Guy',
    '1',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=668&q=80',
  ),
];

export default BLOGS;