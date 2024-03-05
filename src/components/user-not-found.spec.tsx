import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { UserNotFound } from './user-not-found'

const term = faker.internet.userName()

describe('UserNotFound Component', () => {
  beforeEach(() => {
    render(<UserNotFound term={term} />)
  })

  it('should render the not found term', () => {
    expect(screen.getByText(`"${term}"`)).toBeInTheDocument()
  })

  it('should render the title', () => {
    expect(screen.getByText(/nenhum usuário encontrado/i)).toBeInTheDocument()
  })

  it('should render the description', () => {
    expect(screen.getByText(/verifique se a escrita está correta ou tente novamente/i)).toBeInTheDocument()
  })
})
