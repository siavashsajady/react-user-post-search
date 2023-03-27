import React from 'react';

const UserListItem = ({ user, onUserSelect }) => {
  return (
    <div className='user-list-item'>
      <li onClick={() => onUserSelect(user)}>{user.name}</li>
    </div>
  );
};

export default UserListItem;
