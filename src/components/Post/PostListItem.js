import React from 'react';

const PostListItem = ({ post }) => {
  return (
    <li className='post-list-item'>
      <h3>{post.title}</h3>
    </li>
  );
};

export default PostListItem;
