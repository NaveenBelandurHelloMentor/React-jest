import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormApplication from "./Form";

describe("Application", () => {
  test("renders correctly", () => {
    render(<FormApplication />);

    const HeadingOne = screen.getByRole("heading", {
      level: 1,
    });
    expect(HeadingOne).toBeInTheDocument();

    const HeadingThree = screen.getByRole("heading", {
      level: 3,
    });
    expect(HeadingThree).toBeInTheDocument();

    const HeadingSix = screen.getByRole("heading", {
      level: 6,
    });
    expect(HeadingSix).toBeInTheDocument();

    const nameInput = screen.getByRole("textbox", { name: "Name" });
    expect(nameInput).toBeInTheDocument();

    const bioTextarea = screen.getByRole("textbox", { name: "Bio" });
    expect(bioTextarea).toBeInTheDocument();

    const locationSelect = screen.getByRole("combobox");
    expect(locationSelect).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();

    //  TO get Through PlaceHolder
    const inputElement = screen.getByPlaceholderText("yourname");
    expect(inputElement).toBeInTheDocument();

    // TO get Through the text field
    const TextHolder = screen.getByText("All Fields Are Mandatory");
    expect(TextHolder).toBeInTheDocument();

    // to get thorugh display value
    const DisplayValue = screen.getByDisplayValue("naveen");
    expect(DisplayValue).toBeInTheDocument();


  // // Finding through the alt value
  // const ImageAlt = screen.getAllByAltText('image')
  // expect(ImageAlt).toBeInTheDocument()

// By the Title Value
const Title = screen.getByTitle('title')
expect(Title).toBeInTheDocument()



  });






  // Finiding Thorught the text holder

  // to get the element through the label

  // const LabelNewOne = screen.getByLabelText('Testing');
  // expect(LabelNewOne).toBeInTheDocument();
});

// test('GetByName',()=>{
//   render(<FormApplication/>)
//     const TextHolder = screen.getByText('All Fields Are Mandatory')
//   expect(TextHolder).toBeInTheDocument()
// })
