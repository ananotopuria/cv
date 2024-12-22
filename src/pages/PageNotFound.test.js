import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound'; // Update the path if needed

describe('PageNotFound Component', () => {
  it('renders "Not Found :(" message', () => {
    render(<PageNotFound />);

    const notFoundMessage = screen.getByText('Not Found :(');

    expect(notFoundMessage).toBeInTheDocument();
  });
});
