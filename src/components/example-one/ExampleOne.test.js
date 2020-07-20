import React from 'react';
import { render } from '@testing-library/react';
import ExampleOne from './ExampleOne';

describe('[COMPONENT] ExampleOne', () => {
  it('renders correctly', () => {
    const { container } = render(<ExampleOne />);
    expect(container).toMatchSnapshot();
  });
});
