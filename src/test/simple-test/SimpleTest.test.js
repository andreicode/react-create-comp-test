import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleTest from './SimpleTest';

describe('[COMPONENT] SimpleTest', () => {

  test('calling render with the same component on the same container does not remount', () => {
    const { getByTestId, rerender } = render(<SimpleTest number={1} />)
    expect(getByTestId('number-display').textContent).toBe('1')

    // re-render the same component with different props
    rerender(<SimpleTest number={2} />)
    expect(getByTestId('number-display').textContent).toBe('2')

    expect(getByTestId('instance-id').textContent).toBe('1')
  })

  it('renders correctly', () => {
    const { container } = render(<SimpleTest />);
    expect(container).toMatchSnapshot();
  });

  it('disabled button', () => {
    render(<SimpleTest />);
    expect(screen.getByTestId('disabledBtn').hasAttribute('disabled')).toBe(true)
  })

});
