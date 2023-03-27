import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../Search/SearchBar';
import PostListItem from './PostListItem';

const PostList = ({ selectedUser }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPosts] = useState([]);

  useState(() => {
    if (selectedUser) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${selectedUser.id}/posts`
        )
        .then((response) => {
          setPosts(response.data);
          setFilteredPosts(response.data);
        });
    }
  }, [selectedUser]);

  const handleSearch = (searchTerm) => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredPost.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
