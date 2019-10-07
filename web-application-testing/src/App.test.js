import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { addStrike } from "./components/display";


test('renders without crashing', () => {
  render(<App />);
});

test('increase Strikes adds one to strikes if strikes are < 2', () => {

  expect(addStrike(0)).toBe(1);

})
