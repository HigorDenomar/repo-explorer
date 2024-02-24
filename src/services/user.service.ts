import { api } from '../lib/api'
import type { User } from '../types/github'

export const UserService = {
  get: async (username: string) => {
    return await api.get<User>(`/users/${username}`)
  },
}
