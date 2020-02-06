import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I memoed!/i);
  console.log(linkElement.textContent)
  expect(linkElement).toBeInTheDocument();
});
