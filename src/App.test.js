import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders initial state with no user selected', () => {
  render(<App />);

  const selectedUserId = screen.getByText(/Selected user ID: none/i);
  const pleaseSelectUser = screen.getByText(/Please select a user/i);

  expect(selectedUserId).toBeInTheDocument();
  expect(pleaseSelectUser).toBeInTheDocument();
});

test('updates selected user ID on user selection', async () => {
  render(<App />);

  const userItem = await screen.findByText(/Leanne Graham/i);
  fireEvent.click(userItem);

  const selectedUserId = screen.getByText(/Selected user ID: 1/i);
  const pleaseSelectUser = screen.queryByText(/Please select a user/i);

  expect(selectedUserId).toBeInTheDocument();
  expect(pleaseSelectUser).not.toBeInTheDocument();
});
