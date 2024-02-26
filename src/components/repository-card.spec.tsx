import { faker } from '@faker-js/faker'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { formatDate } from '../lib/utils'
import type { Repository } from '../types/github'
import { RepositoryCard } from './repository-card'

const repository = {
  id: 1,
  name: faker.internet.displayName(),
  description: faker.lorem.paragraph(),
  html_url: faker.internet.url(),
  updated_at: `${faker.date.past()}`,
  language: faker.lorem.word(),
} as unknown as Repository

describe('RepositoryCard', () => {
  beforeEach(() => {
    render(<RepositoryCard repository={repository} />)
  })

  it('should render the anchor with repository name', () => {
    const link = screen.getByRole('link', { name: repository.name })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', repository.html_url)
  })

  it('should render the repository description', () => {
    expect(screen.getByText(repository.description as string)).toBeInTheDocument()
  })

  it('should render the repository technology', () => {
    expect(screen.getByText(repository.language as string)).toBeInTheDocument()
  })

  it('should render the repository update date', () => {
    const time = screen.getByText(formatDate(repository.updated_at))

    expect(time).toBeInTheDocument()
    expect(time).toHaveAttribute('datetime', repository.updated_at)
  })

  it('should be able to add the repository to favorites', () => {
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', "Adicionar aos favoritos")

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-label', "Remover dos favoritos")
  })

  it('should be able to remove the repository to favorites', () => {
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('aria-label', "Remover dos favoritos")
    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-label', "Adicionar aos favoritos")
  })
})
