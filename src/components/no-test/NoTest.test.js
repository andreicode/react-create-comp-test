import React from 'react';
import { render } from '@testing-library/react';
import NoTest from './NoTest';

describe('[COMPONENT] NoTest', () => {
  it('renders correctly', () => {
    const { container } = render(<NoTest />);
    expect(container).toMatchSnapshot();
  });
});
