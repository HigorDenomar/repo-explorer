import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

describe('SearchForm', () => {
  beforeEach(() => {
    render(<SearchForm />, { wrapper: BrowserRouter })
  })

  it('should render the input search', () => {
    const input = screen.getByPlaceholderText(/buscar usuário/i)

    expect(input).toBeInTheDocument()
  })

  it('should render the submit button search', () => {
    const button = screen.getByLabelText(/buscar/i)

    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('should be able to search when the input is populated', () => {

    const input = screen.getByPlaceholderText(/buscar usuário/i)
    const button = screen.getByLabelText(/buscar/i)

    fireEvent.change(input, { target: { value: 'username' } })

    expect(button).not.toBeDisabled()
  })

  it('should be redirect to the user page', () => {
    const input = screen.getByPlaceholderText(/buscar usuário/i)
    const button = screen.getByLabelText(/buscar/i)

    fireEvent.change(input, { target: { value: 'username' } })
    fireEvent.click(button)

    expect(navigate).toHaveBeenCalledWith('/user/username')
  })
})
