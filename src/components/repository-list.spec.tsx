import { faker } from '@faker-js/faker'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import 'intersection-observer'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import type { Repository } from '../types/github'
import { RepositoryList } from './repository-list'

const repositoryList = [{
  id: 1,
  name: faker.internet.displayName(),
  description: faker.lorem.paragraph(),
  html_url: faker.internet.url(),
  updated_at: `${faker.date.past()}`,
  language: faker.lorem.word(),
},
{
  id: 1,
  name: faker.internet.displayName(),
  description: faker.lorem.paragraph(),
  html_url: faker.internet.url(),
  updated_at: `${faker.date.past()}`,
  language: faker.lorem.word(),
}
] as unknown as Repository[]


vi.mock("react-query", async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual as Record<string, unknown>,

    useInfiniteQuery: () => ({
      data: {
        pages: [repositoryList],
      },
    })
  }
})

vi.mock('../store/user', () => ({
  useUserStore: () => ({
    user: { id: 'asd' }
  })
}))

describe('RepositoryList', () => {
  beforeEach(() => {
    render(<RepositoryList />)
  })

  it('should render the repository list', () => {
    repositoryList.forEach(repository => {
      const repositoryName = screen.getByText(repository.name)

      expect(repositoryName).toBeInTheDocument()
    })
  })
})
