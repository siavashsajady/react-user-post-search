import React, { useCallback, useState } from 'react';
import UserList from './components/User/UserList';
import PostList from './components/Post/PostList';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  return (
    <div className='container'>
      <div className='user-list'>
        <p>Selected user ID: {selectedUser ? selectedUser.id : 'none'}</p>
        <UserList onUserSelect={handleUserSelect} />
      </div>
      <div className='post-list'>
        {selectedUser ? (
          <PostList key={selectedUser.id} selectedUser={selectedUser} />
        ) : (
          <p>Please select a user</p>
        )}
      </div>
    </div>
  );
}
export default App;
