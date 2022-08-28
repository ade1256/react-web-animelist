import { fireEvent, render, screen } from "@testing-library/react"
import { Modal } from "../components"

describe('Test Modal Component', () => {
  it('Render Modal component', () => {
    const handleClick = jest.fn()
    render(<Modal title="title" onClose={handleClick}>content</Modal>)
    const element = screen.getByTestId('modal-component')
    expect(element).toHaveTextContent("title")
    expect(element).toHaveTextContent("content")
  })
  it('Test close Modal component', () => {
    const handleClick = jest.fn()
    render(<Modal title="title" onClose={handleClick}>content</Modal>)
    const element = screen.getByTestId('modal-component')
    expect(element).toHaveTextContent("title")
    expect(element).toHaveTextContent("content")
    fireEvent.click(element.getElementsByClassName('close')[0])
    expect(handleClick).toBeCalledTimes(1)
  })
})