import { create } from 'zustand'
import type { User } from '../types/github'

type StoreProps = {
  user?: User
  isLoading?: boolean
}

export const useUserStore = create<StoreProps>(() => ({
  user: undefined,
  isLoading: false,
}))
