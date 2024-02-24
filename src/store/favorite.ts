import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Repository } from '../types/github'

type StoreProps = {
  favorites: Repository[]
  add: (repo: Repository) => void
  remove: (id: number) => void
}

export const useFavoriteStore = create(
  persist<StoreProps>(
    (set) => ({
      favorites: [],
      add: (repo) =>
        set((state) => ({ favorites: [repo, ...state.favorites] })),
      remove: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((repo) => repo.id !== id),
        })),
    }),
    {
      name: 'favorite-repos',
    }
  )
)
