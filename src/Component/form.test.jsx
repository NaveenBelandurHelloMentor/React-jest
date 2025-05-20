import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormApplication from './Form';

describe('Application', () => {
  test('renders correctly', () => {
    render(<FormApplication />);

    const HeadingOne = screen.getByRole('heading',{
        level:1
    })
    expect(HeadingOne).toBeInTheDocument()

    const HeadingThree = screen.getByRole('heading',{
        level:3
    })
    expect(HeadingThree).toBeInTheDocument()

    
    const HeadingSix = screen.getByRole('heading',{
        level:6
    })
    expect(HeadingSix).toBeInTheDocument()
    

    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    expect(nameInput).toBeInTheDocument();

    const bioTextarea = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioTextarea).toBeInTheDocument();

    const locationSelect = screen.getByRole('combobox');
    expect(locationSelect).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });

  // to get the element through the label 

// const LabelNewOne = screen.getByLabelText('Testing');
// expect(LabelNewOne).toBeInTheDocument();



});
