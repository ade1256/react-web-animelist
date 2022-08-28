import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../components'

describe('BUTTON COMPONENT TEST', () => {
  it('Should render button default', () => {
    render(<Button>test</Button>)
    const element = screen.getByTestId('button-component')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test')
  })
  it('Should render button theme primary', () => {
    render(<Button theme='primary'>test</Button>)
    const element = screen.getByTestId('button-component')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test')
    expect(element.querySelector('div')).toHaveClass('primary')
  })
  it('Should render button theme secondary', () => {
    render(<Button theme='secondary'>test</Button>)
    const element = screen.getByTestId('button-component')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test')
    expect(element.querySelector('div')).toHaveClass('secondary')
  })
  it('Should render disabled button', () => {
    render(<Button theme='secondary' isDisabled>test</Button>)
    const element = screen.getByTestId('button-component')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test')
    expect(element.querySelector('div')).toHaveClass('secondary')
    expect(element).toHaveAttribute('disabled')
  })
  it('Test button cannot click when isDisabled ', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} isDisabled>test</Button>)
    const element = screen.getByTestId('button-component')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test')
    fireEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  it('Test button click event', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>test</Button>)
    const element = screen.getByTestId('button-component')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test')
    fireEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})