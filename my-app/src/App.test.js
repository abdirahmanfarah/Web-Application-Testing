import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import expectExport from 'expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ('Ball text', () => {
  const { getByText } = rtl.render(<App />);
  getByText('Ball');
})

// test ('strikes equals 3', () => {
//   let expected;
//   let actual;

//   actual = StrikeCount(3);
//   expected = 3;
//   expect(actual).not.toBe(expected);
// })

test ('strikes equals 3', () => {
  let expected;
  let actual;

  actual = StrikeCount(0);
  expected = 3
  expect(StrikeCount(0)).toBe(3);
})

