import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from './Info';

describe('Info Component', () => {
  it('renders children and text prop correctly', () => {
    const text = 'Sample Text';
    render(
      <Info text={text}>
        <div>Child Component</div>
      </Info>
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText('Sample Text')).toHaveClass('bg-[#EEE]');
  });
});
