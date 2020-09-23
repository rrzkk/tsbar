import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from '../App';
it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <a>Learn React!</a>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});