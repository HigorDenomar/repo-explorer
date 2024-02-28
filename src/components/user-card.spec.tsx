import { faker } from '@faker-js/faker'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { UserCard } from './user-card'

const user = {
  id: faker.number.int(),
  name: faker.internet.displayName(),
  login: faker.internet.userName(),
  avatar_url: faker.image.url(),
}

vi.mock('../store/user', () => ({
  useUserStore: () => ({
    user,
  })
}))

describe('UserCard', () => {
  beforeEach(() => {
    render(<UserCard />)
  })

  it('should render the user card', () => {
    expect(screen.getByTestId('user-card')).toBeInTheDocument()
  })

  it('should render the user name', () => {
    expect(screen.getByText(user.name)).toBeInTheDocument()
  })

  it('should render the user login', () => {
    expect(screen.getByText(`@${user.login}`)).toBeInTheDocument()
  })

  it('should render the user avatar', () => {
    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', user.avatar_url)
  })
})
