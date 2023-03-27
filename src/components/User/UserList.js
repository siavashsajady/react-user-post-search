import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../Search/SearchBar';
import UserListItem from './UserListItem';

const UserList = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
      setFilteredUsers(response.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <ul>
        {filteredUsers.map((user) => (
          <UserListItem key={user.id} user={user} onUserSelect={onUserSelect} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
