import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('Box Component', () => {
  it('renders with provided title and content', () => {
    const title = 'Sample Title';
    const content = 'Sample Content';
    render(<Box title={title} content={content} />);
    const titleElement = screen.getByText(title);
    const contentElement = screen.getByText(content);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('text-xl font-bold text-[#26C17E]');
    expect(contentElement).toHaveClass('text-sm text-[#222935]');
  });
});
