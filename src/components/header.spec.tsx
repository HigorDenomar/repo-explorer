import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'

import { Header } from './header'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: BrowserRouter })
  })

  it('should render the search form', () => {
    expect(screen.getByTestId('search-form')).toBeInTheDocument()
  })

  it('should render the favorite link', () => {
    const link = screen.getByRole('link', { name: /favoritos/i })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/favoritos')
  })
})
