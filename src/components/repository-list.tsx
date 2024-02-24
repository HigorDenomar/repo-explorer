import { useEffect } from 'react';
import { RepositoryService } from '../services/repository.service';
import { useRepositoryStore } from '../store/repository';
import { useUserStore } from '../store/user';
import { RepositoryCard } from './repository-card';
import { RepositoryListSkeleton } from './skeletons/repository-list-skeleton';

export function RepositoryList() {
  const { repositories } = useRepositoryStore()
  const { user } = useUserStore()

  useEffect(() => {
    async function getRepos() {
      try {
        if (!user?.id) return

        const { data } = await RepositoryService.get(user?.login)

        if (!data?.length) return

        useRepositoryStore.setState({ repositories: data ?? [] })
      } catch (error) {
        console.error(error)
      }
    }

    getRepos()
  }, [user?.name])

  if (!repositories?.length) {
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
