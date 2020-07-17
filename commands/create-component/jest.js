import React from 'react';
import { render } from '@testing-library/react';
import ComponentName from '{path}';

describe('[COMPONENT] ComponentName', () => {
  it('renders correctly', () => {
    const { container } = render(<ComponentName />);
    expect(container).toMatchSnapshot();
  });
});
