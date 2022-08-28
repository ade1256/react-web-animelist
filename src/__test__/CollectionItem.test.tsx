import { fireEvent, render, screen } from "@testing-library/react"
import { CollectionItem } from "../components"

describe('Test Collection Item Component', () => {
  it('Render Collection Item', () => {
    render(<CollectionItem
      name="collection"
    />)
    const element = screen.getByTestId('collection-item-component')
    expect(element).toHaveTextContent('collection')
  })

  it('When selected on click', () => {
    const handleClick = jest.fn()
    render(<CollectionItem
      name="collection"
      onClick={handleClick}
      isSelected
    />)
    const element = screen.getByTestId('collection-item-component')
    expect(element).toHaveTextContent('collection')
    fireEvent.click(element.getElementsByClassName('name')[0])
    expect(element.getElementsByClassName('info-collection selected')[0]).toBeInTheDocument()
    expect(handleClick).toBeCalledTimes(1)
  })

  it('When selected on click edit', () => {
    const handleClick = jest.fn()
    render(<CollectionItem
      name="collection"
      onClickEdit={handleClick}
      onClickRemove={handleClick}
      isShowEditBtn
      isShowRemoveBtn
    />)
    const element = screen.getByTestId('collection-item-component')
    expect(element).toHaveTextContent('collection')
    fireEvent.click(element.getElementsByClassName('editIcon')[0])
    expect(handleClick).toBeCalledTimes(1)
  })

  it('When selected on click remove', () => {
    const handleClick = jest.fn()
    render(<CollectionItem
      name="collection"
      onClickEdit={handleClick}
      onClickRemove={handleClick}
      isShowEditBtn
      isShowRemoveBtn
    />)
    const element = screen.getByTestId('collection-item-component')
    expect(element).toHaveTextContent('collection')
    fireEvent.click(element.getElementsByClassName('removeIcon')[0])
    expect(handleClick).toBeCalledTimes(1)
  })

})