import { api } from '../lib/api'
import type { ListUsers, User } from '../types/github'

export const UserService = {
  get: async (username: string) => {
    return await api.get<User>(`/users/${username}`)
  },
  list: async (search: string) => {
    return await api.get<ListUsers>(`/search/users?q=${search}&per_page=5`)
  },
}
