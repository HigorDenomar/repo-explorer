import { useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'

import { RepositoryService } from '../services/repository.service'
import { useUserStore } from '../store/user'

export function UseRepositoryQuery() {
  const { user } = useUserStore()

  const query = useInfiniteQuery({
    queryKey: ['repositories', user?.login],
    queryFn: async ({ pageParam }) => {
      const { data } = await RepositoryService.get({
        username: user?.login as string,
        page: pageParam
      })
      return data
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined
    },
    enabled: !!user?.login,
    refetchOnWindowFocus: false
  })

  const repositories = useMemo(() => {
    return query.data?.pages.reduce((acc, page) => [...acc, ...page], [])
  }, [query.data])

  return { ...query, data: repositories }
}
