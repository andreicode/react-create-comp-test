import React from 'react';
import { render } from '@testing-library/react';
import SuperTest from './SuperTest';

describe('[COMPONENT] SuperTest', () => {
  it('renders correctly', () => {
    const { container } = render(<SuperTest />);
    expect(container).toMatchSnapshot();
  });

  it('contains "SuperTest" text', () => {
    const { getByText } = render(<SuperTest />);
    const textElement = getByText(/SuperTest/i);
    expect(textElement).toBeInTheDocument();
  });

  it('contains "SuperTest" text', () => {
    const { getByText, container } = render(<SuperTest />);
    const btnElement = getByText(/PressMe/i);
    expect(btnElement).toBeInTheDocument();
    const counter = container.querySelector('#count');
    expect(counter.textContent).toBe('0');
    btnElement.click();
    expect(counter.textContent).toBe('1');
  });
});
