import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './MouseEvent';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading', { level: 1 });
    expect(countElement).toBeInTheDocument();
  });

  test('increments count after button click', async () => {
    const user = userEvent.setup(); // ✅ assign to a variable
    render(<Counter />);
    
    const incrementButton = screen.getByRole('button');
    await user.click(incrementButton);
    
    const countElement = screen.getByRole('heading', { level: 1 }); // use level
    expect(countElement).toHaveTextContent('1'); // ✅ make sure this matches expected output
  });
});
