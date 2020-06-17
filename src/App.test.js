import React from 'react';
import { mount, shallow } from "enzyme";
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

 describe('Test Loader component ', () => {
  it('should update the isLoading status when invoked by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('isLoading')).toBe(true);
    wrapper.instance().isToggleLoadingHandler();
    // wrapper.instance().isToggleLoadingHandler();
    // wrapper.instance().isToggleLoadingHandler();
    expect(wrapper.state('isLoading')).toBe(false);
  });
  
 });
