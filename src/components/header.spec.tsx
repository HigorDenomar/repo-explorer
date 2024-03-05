import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Header } from './header'


vi.mock("react-query", async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual as Record<string, unknown>,

    useQuery: () => ({})
  }
})

describe('Header', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: BrowserRouter })
  })

  it('should render the search form', () => {
    expect(screen.getByTestId('search-input')).toBeInTheDocument()
  })

  it('should render the favorite link', () => {
    const link = screen.getByRole('link', { name: /favoritos/i })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/favoritos')
  })
})
