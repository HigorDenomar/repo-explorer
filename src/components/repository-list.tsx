import { UseRepositoryQuery } from '../hooks/useRepositoryQuery';
import { useUserStore } from '../store/user';
import { InfiniteScroll } from './infinite-scroll';
import { RepositoryCard } from './repository-card';
import { RepositoryListSkeleton } from './skeletons/repository-list-skeleton';

export function RepositoryList() {
  const { user } = useUserStore()

  const {
    data: repositories,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = UseRepositoryQuery()

  if (isLoading || !user?.id) {
    return <RepositoryListSkeleton />
  }

  return (
    <article className='col-span-1 w-full mt-10 md:mt-0' data-testid='repository-list'>
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
