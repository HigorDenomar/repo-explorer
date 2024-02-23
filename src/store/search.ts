import { create } from 'zustand'

type StoreProps = {
  username: string
}

export const useSearchStore = create<StoreProps>(() => ({
  username: '',
}))
