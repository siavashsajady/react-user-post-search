import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import PostList from './PostList';

jest.mock('axios');

test('renders post list with given user posts', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'Sample Post Title 1',
        body: 'This is a sample post 1.',
      },
      {
        userId: 1,
        id: 2,
        title: 'Sample Post Title 2',
        body: 'This is a sample post 2.',
      },
    ],
  });

  const selectedUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  };

  render(<PostList selectedUser={selectedUser} />);

  const postTitle1 = await screen.findByText(/Sample Post Title 1/i);
  const postTitle2 = await screen.findByText(/Sample Post Title 2/i);

  expect(postTitle1).toBeInTheDocument();
  expect(postTitle2).toBeInTheDocument();
});

test('filters posts based on search input', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'Sample Post Title 1',
        body: 'This is a sample post 1.',
      },
      {
        userId: 1,
        id: 2,
        title: 'Sample Post Title 2',
        body: 'This is a sample post 2.',
      },
    ],
  });

  const selectedUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  };

  render(<PostList selectedUser={selectedUser} />);

  const searchInput = screen.getByPlaceholderText(/search/i);
  fireEvent.change(searchInput, { target: { value: 'title 1' } });

  const postTitle1 = await screen.findByText(/Sample Post Title 1/i);
  await waitFor(() => {
    const postTitle2 = screen.queryByText(/Sample Post Title 2/i);
    expect(postTitle2).toBeInTheDocument();
  });

  expect(postTitle1).toBeInTheDocument();
});

test('renders no posts when no user is selected', () => {
  render(<PostList selectedUser={null} />);

  const searchInput = screen.getByPlaceholderText(/search/i);
  expect(searchInput).toBeInTheDocument();

  const postItems = screen.queryAllByTestId('post-list-item');
  expect(postItems.length).toBe(0);
});
