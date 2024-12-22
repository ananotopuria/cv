import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './SkillsContent'; 

describe('Content Component', () => {
  it('renders with provided title, content, and children', () => {
    const title = 'Sample Title';
    const content = 'Sample Content';
    const sampleChildText = 'Sample Child';

    render(
      <Content id="contentId" title={title} content={content}>
        <div>{sampleChildText}</div>
      </Content>
    );

    const titleElement = screen.getByText(title);
    const contentElement = screen.getByText(content);
    const childElement = screen.getByText(sampleChildText);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();

  });
});
