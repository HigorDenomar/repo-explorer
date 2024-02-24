import { useQuery } from 'react-query';

import { RepositoryService } from '../services/repository.service';
import { useRepositoryStore } from '../store/repository';
import { useUserStore } from '../store/user';
import { RepositoryCard } from './repository-card';
import { RepositoryListSkeleton } from './skeletons/repository-list-skeleton';

export function RepositoryList() {
  const { repositories } = useRepositoryStore()
  const { user } = useUserStore()

  const { isLoading } = useQuery({
    queryKey: ['repositories', user?.login],
    queryFn: async () => {
      const { data } = await RepositoryService.get(user?.login as string)
      return data
    },
    onSuccess(data) {
      useRepositoryStore.setState({ repositories: data ?? [] })
    },
    enabled: !!user?.login,
  })

  if (isLoading || !user?.id) {
    return <RepositoryListSkeleton />
  }

  return (
    <article className='col-span-1 w-full mt-10 md:mt-0'>
      <h2 className='text-primary font-semibold text-xl mb-4 text-center md:text-start'>Repositórios</h2>

      <ul className='flex flex-col gap-4'>
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </ul>
    </article>
  )
}
