/* Greet should render the text hello and if a name is passed into the component
It Should render hello followed by the name*/

import {render,screen} from '@testing-library/react'
import TestDriven from './TestDriven'
// Need to include the testing libabry jest dom 
import '@testing-library/jest-dom'

test('TestDrivenComponnet',()=>{
    render(<TestDriven/>)
     const TextElement = screen.getByText("Hello")
     expect(TextElement).toBeInTheDocument()
})

test('TestTwo',()=>{
    render(<TestDriven name='Naveen S Belanur'/>)
    const TextElement = screen.getByText("Hello Naveen S Belanur")
    expect(TextElement).toBeInTheDocument()
})

// By Providing the test.only it will Test only that Regaring Test case 
// By Providing the tests.skip it will skip that provide test case

// Grouping the test

// Describe is used for grouping the both the test in one test 
// Describe Will help us to run both the test in single one
// We can use Describe Skip and only to skip and make this only also 
// we can do nested descirbe also 
describe('NameNumber',()=>{
test('testingName',()=>{
    render(<TestDriven/>)
    const TextElement = screen.getByText('Testing')
    expect(TextElement).toBeInTheDocument()
})


test('testnumber',()=>{
    render(<TestDriven/>)
    const TextElemnet = screen.getByText(4)
    expect(TextElemnet).toBeInTheDocument()
})



})

