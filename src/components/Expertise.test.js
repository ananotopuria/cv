import React from 'react';
import { render, screen } from '@testing-library/react';
import Expertise from './Expertise';

const testData = [
  {
    info: {
      company: 'Test Company 1',
      job: 'Test Job 1',
      description: 'Description for Test Job 1',
    },
    date: '2022-2023',
  },
  {
    info: {
      company: 'Test Company 2',
      job: 'Test Job 2',
      description: 'Description for Test Job 2',
    },
    date: '2020-2021',
  },
];

describe('Expertise Component', () => {
  it('should render expertise items with provided data', () => {
    render(<Expertise data={testData} />);

    testData.forEach((item) => {
      expect(screen.getByText(item.info.company)).toBeInTheDocument();
      expect(screen.getByText(item.date)).toBeInTheDocument();
      expect(screen.getByText(item.info.job)).toBeInTheDocument();
      expect(screen.getByText(item.info.description)).toBeInTheDocument();
    });
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(testData.length);
  });
});
