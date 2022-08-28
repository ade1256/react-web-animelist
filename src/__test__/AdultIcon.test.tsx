import { render, screen } from '@testing-library/react'
import { AdultIcon } from '../components'

describe('AdultIcon Tests', () => {
  it('Render AdultIcon', () => {
    render (<AdultIcon />)
    const element = screen.getByTestId('adult-icon')
    expect(element).toHaveTextContent('18+')
    expect(element).toHaveTextContent('Adult content')
  })
})