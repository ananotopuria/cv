import React from 'react';
import { render, screen } from '@testing-library/react';
import Feedback from './Feedback';


const mockData = [
  {
    feedback: 'Great work!',
    reporter: {
      name: 'John Doe',
      photoUrl: 'https://example.com/photo.jpg',
      citeUrl: 'https://example.com/profile',
    },
  },

];

describe('Feedback Component', () => {
  it('renders feedback items with provided data', () => {
    render(<Feedback data={mockData} />);

    mockData.forEach((item) => {
      expect(screen.getByText(item.feedback)).toBeInTheDocument();
      expect(screen.getByAltText(item.reporter.name)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'somesite.com' })).toBeInTheDocument();
      expect(screen.getByText(item.reporter.name)).toBeInTheDocument();
    });
  });
});
