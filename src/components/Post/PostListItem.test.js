import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostListItem from './PostListItem';

test('renders post list item with the given title', () => {
  const mockPost = {
    userId: 1,
    id: 1,
    title: 'Sample Post Title',
    body: 'This is a sample post.',
  };

  render(<PostListItem post={mockPost} />);

  expect(screen.getByText(/Sample Post Title/i)).toBeInTheDocument();
});
