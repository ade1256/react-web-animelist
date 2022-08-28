import { fireEvent, render, screen } from "@testing-library/react"
import { Pagination } from "../components"

describe('Test Pagination Component', () => {

  it('Render Pagination', () => {
    const handleChangePage = jest.fn()
    render(<Pagination currentPage={1} totalPage={10} handleChangePage={handleChangePage} />)
    const element = screen.getByTestId('pagination-component')
    for (let index = 1; index <= 10; index++) {
      expect(element).toHaveTextContent(`${index}`)
    }
  })

  it('test click change page', () => {
    const handleChangePage = jest.fn()
    render(<Pagination currentPage={1} totalPage={10} handleChangePage={handleChangePage} />)
    const element = screen.getByTestId('pagination-component')
    fireEvent.click(element.getElementsByClassName('item')[3])
    expect(handleChangePage).toBeCalledTimes(1)
  })

})