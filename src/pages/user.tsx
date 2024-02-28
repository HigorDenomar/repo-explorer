import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RepositoryList } from '../components/repository-list';
import { UserSkeleton } from '../components/skeletons/user-skeleton';
import { UserCard } from '../components/user-card';
import { useUserQuery } from '../hooks/useUserQuery';
import { cls } from '../lib/utils';
import { useUserStore } from '../store/user';

export function UserPage() {
  const { username } = useParams<{ username: string }>()
  const { isRefetching } = useUserQuery({ username })

  const { user } = useUserStore()

  useEffect(() => {
    useUserStore.setState({
      isLoading: !isRefetching
    })
  }, [])

  return (
    <main className={cls([
      'p-4 pt-6 min-h-svh text-gray-600',
      'md:grid md:grid-cols-[minmax(280px,448px)_minmax(300px,1fr)] md:gap-x-12',
    ])}>
      {user?.id ? (
        <UserCard />
      ) : <UserSkeleton />}

      <RepositoryList />
    </main>
  )
}
