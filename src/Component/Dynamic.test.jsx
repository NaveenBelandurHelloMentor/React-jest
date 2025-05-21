import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import DynamicTest from './DynamicMaptest'



describe('Test',()=>{
    const ui = ['Text','Text_Test','Text_Test_Jest']
    test('renderCorrectly',()=>{
        render(<DynamicTest/>)
        screen.debug()
        const ListElement = screen.getByRole('list')
        expect(ListElement).toBeInTheDocument()
    })

})