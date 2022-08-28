import { render, screen } from "@testing-library/react"
import { Loading } from "../components"

describe('Test Loading Component', () => {
  it('Render loading component', () => {
    render(<Loading />)
    const element = screen.getByTestId('loading-component')
    expect(element).toHaveTextContent('loading')
  })
})