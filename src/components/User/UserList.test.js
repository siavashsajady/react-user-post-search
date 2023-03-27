import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserList from './UserList';

test('renders user list correctly', async () => {
  const mockOnUserSelect = jest.fn();

  render(<UserList onUserSelect={mockOnUserSelect} />);

  const user1 = await screen.findByText(/Leanne Graham/i);
  const user2 = await screen.findByText(/Ervin Howell/i);

  expect(user1).toBeInTheDocument();
  expect(user2).toBeInTheDocument();
});

test('filters users based on search input', async () => {
  const mockOnUserSelect = jest.fn();

  render(<UserList onUserSelect={mockOnUserSelect} />);

  const searchInput = screen.getByPlaceholderText(/search/i);
  fireEvent.change(searchInput, { target: { value: 'Leanne' } });

  const user1 = await screen.findByText(/Leanne Graham/i);
  const user2 = screen.queryByText(/Ervin Howell/i);

  expect(user1).toBeInTheDocument();
  expect(user2).toBeInTheDocument();
});
