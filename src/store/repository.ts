import { create } from 'zustand'
import type { Repository } from '../types/github'

type StoreProps = {
  repositories: Repository[]
  addRepositories: (repos: Repository[]) => void
}

export const useRepositoryStore = create<StoreProps>((set) => ({
  repositories: [],
  addRepositories: (repos: Repository[]) =>
    set((state) => ({ repositories: state.repositories?.concat(repos) })),
}))
