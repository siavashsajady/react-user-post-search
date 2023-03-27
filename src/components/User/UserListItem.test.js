import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import UserListItem from './UserListItem';

test('renders user list item with the given name', () => {
  const mockUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  };

  render(<UserListItem user={mockUser} onUserSelect={() => {}} />);

  expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
});

test('calls onUserSelect callback when user item is clicked', () => {
  const mockUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  };

  const onUserSelectMock = jest.fn();

  render(<UserListItem user={mockUser} onUserSelect={onUserSelectMock} />);

  const userItem = screen.getByText(/Leanne Graham/i);
  userEvent.click(userItem);

  expect(onUserSelectMock).toHaveBeenCalledTimes(1);
  expect(onUserSelectMock).toHaveBeenCalledWith(mockUser);
});
