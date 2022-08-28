import { fireEvent, render, screen } from "@testing-library/react"
import { TextField } from "../components"

describe('Test TextField Component', () => {

  it('Render TextField', () => {
    const handleChange = jest.fn()
    render(
      <TextField type={"text"} placeholder="placeholder" onChange={handleChange} value="test" />
    )
    const element = screen.getByTestId('textfield-component')
    expect(element.getElementsByTagName('input')[0]).toBeInTheDocument()
  })

  it('test change value TextField', () => {
    const handleChange = jest.fn()
    render(
      <TextField type={"text"} placeholder="placeholder" onChange={handleChange} isError errorMessage="error" />
    )
    fireEvent.change(screen.getByPlaceholderText("placeholder"), {
      target: { value: "!@!##@$@" }
    });
    expect(screen.getByText("error")).toBeInTheDocument();
  })

})