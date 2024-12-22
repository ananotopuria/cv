import React from 'react';
import { render, screen } from '@testing-library/react';
import ScrollToTopButton from './ScrollToTopButton'; 

describe('ScrollToTopButton Component', () => {
  it('renders the button with the up chevron icon', () => {
    render(<ScrollToTopButton />);

    const upChevronIcon = screen.getByTestId('up-chevron-icon'); 
    expect(upChevronIcon).toBeInTheDocument();
  });
});
