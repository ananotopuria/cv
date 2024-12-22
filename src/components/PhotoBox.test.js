import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoBox from './PhotoBox'; 

describe('PhotoBox Component', () => {
  it('renders view1 when only basic props are provided', () => {
    const fullName = 'John Doe';
    const imgSrc = '/path/to/image.png';

    render(<PhotoBox fullName={fullName} imgSrc={imgSrc} />);

    const fullNameElement = screen.getByText(fullName);
    const imgElement = screen.getByAltText(`${fullName} avatar`);

    expect(fullNameElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  it('renders view2 when position and description props are provided', () => {
    const fullName = 'Jane Smith';
    const imgSrc = '/path/to/another-image.png';
    const position = 'Engineer';
    const description = 'Some description about the person.';

    render(
      <PhotoBox
        fullName={fullName}
        imgSrc={imgSrc}
        position={position}
        description={description}
      />
    );

    const fullNameElement = screen.getByText(fullName);
    const imgElement = screen.getByAltText(`${fullName} avatar`);
    const positionElement = screen.getByText(position);
    const descriptionElement = screen.getByText(description);

    expect(fullNameElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(positionElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
