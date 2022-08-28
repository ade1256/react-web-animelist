import { fireEvent, render, screen } from "@testing-library/react"
import { MenuBottom } from "../components"

// Manipulate useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('Test MenuBottom Component', () => {
  it('Render MenuBottom component', () => {
    render(<MenuBottom />)
    const element = screen.getByTestId('menu-bottom-component')
    expect(element.getElementsByClassName('menu')[0]).toBeInTheDocument()
  })

  it('test click to navigate menu', () => {
    render(<MenuBottom />)
    const element = screen.getByTestId('menu-bottom-component')
    expect(element.getElementsByClassName('menu')[0]).toBeInTheDocument()
    fireEvent.click(element.getElementsByClassName('menu')[0])
    expect(mockedUsedNavigate).toBeCalledTimes(1)
  })
})