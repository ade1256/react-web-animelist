import { fireEvent, render, screen } from "@testing-library/react"
import { Card } from "../components"
import { Anime } from "../types/Anime"

// Manipulate useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

const anime: Anime = {
  id: 1,
  title: {
    english: 'title',
    native: 'native title'
  },
  coverImage: {
    large: 'http://image.com'
  },
  averageScore: 80
}

describe('Test Card Component', () => {
  it('Render card component', () => {
    render(
      <Card
        id={anime.id}
        averageScore={anime.averageScore}
        image={anime.coverImage.large}
        title={anime.title.english}
      />
    )
    const element = screen.getByTestId('card-component')
    expect(element).toHaveTextContent('title')
    expect(element).toHaveTextContent('80')
    expect(screen.getByAltText('image-of-title')).toHaveAttribute('src', anime.coverImage.large)
  })
  it('Render card component with remove icon', () => {
    render(
      <Card
        id={anime.id}
        averageScore={anime.averageScore}
        image={anime.coverImage.large}
        title={anime.title.english}
        isShowRemoveButton
      />
    )
    const element = screen.getByTestId('card-component')
    expect(element).toHaveTextContent('title')
    expect(element).toHaveTextContent('80')
    expect(screen.getByAltText('image-of-title')).toHaveAttribute('src', anime.coverImage.large)
    expect(element.getElementsByClassName('remove')[0]).toBeInTheDocument()
  })
  it('Render card component with score below 80 score orange', () => {
    render(
      <Card
        id={anime.id}
        averageScore={50}
        image={anime.coverImage.large}
        title={anime.title.english}
        isShowRemoveButton
      />
    )
    const element = screen.getByTestId('card-component')
    expect(element).toHaveTextContent('title')
    expect(element).toHaveTextContent('50')
    expect(screen.getByAltText('image-of-title')).toHaveAttribute('src', anime.coverImage.large)
    expect(element.firstChild).toHaveClass('orange')
  })
  it('Render card component with score greater 80 score green', () => {
    render(
      <Card
        id={anime.id}
        averageScore={100}
        image={anime.coverImage.large}
        title={anime.title.english}
        isShowRemoveButton
      />
    )
    const element = screen.getByTestId('card-component')
    expect(element).toHaveTextContent('title')
    expect(element).toHaveTextContent('100')
    expect(screen.getByAltText('image-of-title')).toHaveAttribute('src', anime.coverImage.large)
    expect(element.firstChild).toHaveClass('green')
  })

  it('test click title & image to navigate detail anime', () => {
    render(
      <Card
        id={anime.id}
        averageScore={100}
        image={anime.coverImage.large}
        title={anime.title.english}
        isShowRemoveButton
      />
    )
    const element = screen.getByTestId('card-component')
    expect(element).toHaveTextContent('title')
    expect(element).toHaveTextContent('100')
    expect(screen.getByAltText('image-of-title')).toHaveAttribute('src', anime.coverImage.large)
    fireEvent.click(element.getElementsByClassName('image')[0])
    fireEvent.click(element.getElementsByTagName('span')[1])
    expect(mockedUsedNavigate).toBeCalledTimes(2)
  })

  it('test click Remove Icon', () => {
    const handleClick = jest.fn()
    render(
      <Card
        id={anime.id}
        averageScore={100}
        image={anime.coverImage.large}
        title={anime.title.english}
        isShowRemoveButton
        onRemove={handleClick}
      />
    )
    const element = screen.getByTestId('card-component')
    expect(element).toHaveTextContent('title')
    expect(element).toHaveTextContent('100')
    expect(screen.getByAltText('image-of-title')).toHaveAttribute('src', anime.coverImage.large)
    fireEvent.click(element.getElementsByClassName('remove')[0])
    expect(handleClick).toBeCalledTimes(1)
  })
})