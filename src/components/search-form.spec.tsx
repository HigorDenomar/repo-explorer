import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SearchForm } from './search-form';

const navigate = vi.fn()

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual as Record<string, unknown>,
    useNavigate: () => navigate
  }
})

vi.mock("react-query", async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual as Record<string, unknown>,
    useQuery: () => ({})
  }
})

describe('SearchForm', () => {
  beforeEach(() => {
    render(<SearchForm />)
  })

  it('should render the input search', () => {
    const input = screen.getByTestId('search-input')

    expect(input).toBeInTheDocument()
  })

  it('should render the search icon', () => {
    const icon = screen.getByLabelText(/search-icon/i)

    expect(icon).toBeInTheDocument()
  })
})
