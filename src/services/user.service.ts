import { api } from '../lib/api'

export const UserService = {
  get: async (username: string) => {
    return await api.get(`/users/${username}`)
  },
}
