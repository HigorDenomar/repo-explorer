import { api } from '../lib/api'
import type { Repository } from '../types/github'

type GetRepositoryServiceParams = {
  username: string
  page?: number
  per_page?: number
}

export const RepositoryService = {
  get: async ({
    username,
    page = 1,
    per_page = 10,
  }: GetRepositoryServiceParams) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return await api.get<Repository[]>(`/users/${username}/repos`, {
      params: {
        page,
        per_page,
        sort: 'updated',
      },
    })
  },
}
