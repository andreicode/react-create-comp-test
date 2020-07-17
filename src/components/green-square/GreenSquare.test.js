import React from 'react';
import { render } from '@testing-library/react';
import GreenSquare from './GreenSquare';

describe('[COMPONENT] GreenSquare', () => {
  it('renders correctly', () => {
    const { container } = render(<GreenSquare />);
    expect(container).toMatchSnapshot();
  });
});
