import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Buttons';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('renders button with text', () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button text="Click me" onClick={handleClick} />);
  const buttonElement = screen.getByText('Click me');

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("navigates to the correct URL when 'to' prop is provided", () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate); 
  render(<Button text="Navigate" to="/some-path" />);
  const buttonElement = screen.getByText('Navigate');

  fireEvent.click(buttonElement);
  expect(navigate).toHaveBeenCalledWith('/some-path');
});

test("button is disabled when 'disabled' prop is set", () => {
  render(<Button text="Disabled" disabled={true} />);
  const buttonElement = screen.getByText('Disabled');
  expect(buttonElement).toBeDisabled();
});