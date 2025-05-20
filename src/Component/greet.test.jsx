// Import the required functions from React Testing Library
import { render, screen } from '@testing-library/react';


// Import the component to be tested
import Greet from './Greet';

// Need to include the testing libabry jest dom 
import '@testing-library/jest-dom'

// Define a test case named 'NameTest'
test('NameTest', () => {
  // Render the Greet component to the virtual DOM
  render(<Greet />);

  // Use screen to query the rendered output
  // We're looking for an element that contains the text 'Hello'
  const textElement = screen.getByText(/hello/i);

  // Assert that the element is present in the document
  expect(textElement).toBeInTheDocument();
});
