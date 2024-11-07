import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should main exists in dom', async () => {
  await act(async () => {
    render(<App />);
  })

  const mainElement = await screen.findByRole('main')
  expect(mainElement).toHaveClass('home-page')
});


