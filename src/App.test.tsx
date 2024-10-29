import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock the global fetch function
global.fetch = jest.fn();

test('displays an error message when fetch fails', async () => {
  (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/Error fetching tasks: Fetch failed/i)).toBeInTheDocument();
  });
});
