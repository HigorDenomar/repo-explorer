import { useQuery } from 'react-query'
import { UserService } from '../services/user.service'
import { useDebounce } from './useDebounce'

type UseListUsersProps = {
  debounceTime?: number,
  search: string
}

export function useListUsers({ debounceTime = 1000, search }: UseListUsersProps) {
  const searchParam = useDebounce(search, debounceTime)

  return useQuery({
    queryFn: async () => {
      const { data } = await UserService.list(searchParam)
      return data.items
    },
    queryKey: ['search', searchParam],
    enabled: !!searchParam,
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  })
}
