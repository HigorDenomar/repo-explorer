import { useInfiniteQuery } from 'react-query';

import { useMemo } from 'react';
import { RepositoryService } from '../services/repository.service';
import { useUserStore } from '../store/user';
import { InfiniteScroll } from './infinite-scroll';
import { RepositoryCard } from './repository-card';
import { RepositoryListSkeleton } from './skeletons/repository-list-skeleton';

export function RepositoryList() {
  const { user } = useUserStore()

  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
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
    return data?.pages.reduce((acc, page) => [...acc, ...page], [])
  }, [data])

  if (isLoading || !user?.id) {
    return <RepositoryListSkeleton />
  }

  return (
    <article className='col-span-1 w-full mt-10 md:mt-0'>
      <h2 className='text-primary font-semibold text-xl mb-4 text-center md:text-start'>Repositórios</h2>

      <InfiniteScroll
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isFetching}
      >
        <ul className='flex flex-col gap-4'>
          {repositories?.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </ul>
      </InfiniteScroll>
    </article>
  )
}
