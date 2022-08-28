import { fireEvent, render, screen } from '@testing-library/react'
import { Back } from '../components'

describe('Back Component Test', () => {
  it('Should render Back Component', () => {
    const handleClick = jest.fn()
    render(<Back handleClick={handleClick} />)
    const element = screen.getByTestId('back-component')
    expect(element).toHaveTextContent('Back')
  })
  it('Click Back Component', () => {
    const handleClick = jest.fn()
    render(<Back handleClick={handleClick} />)
    const element = screen.getByTestId('back-component')
    expect(element).toHaveTextContent('Back')
    fireEvent.click(screen.getByText(`Back`))
    expect(handleClick).toBeCalledTimes(1)
  })
})