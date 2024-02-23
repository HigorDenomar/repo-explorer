import { api } from '../lib/api'
import type { Repository } from '../types/github'

export const RepositoryService = {
  get: async (username: string) => {
    return await api.get<Repository[]>(`/users/${username}/repos`)
  },
}
