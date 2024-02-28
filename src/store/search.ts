import { create } from 'zustand'

type StoreProps = {
  search: string
}

export const useSearchStore = create<StoreProps>(() => ({
  search: '',
}))
