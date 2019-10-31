import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ('Ball text', () => {
  const { getByText } = rtl.render(<App />);
  getByText('Ball');
})
