import { useEffect } from 'react';
import { redirect, useParams } from 'react-router-dom';

import { RepositoryList } from '../components/repository-list';
import { UserSkeleton } from '../components/skeletons/user-skeleton';
import { UserCard } from '../components/user-card';
import { UserNotFound } from '../components/user-not-found';
import { useUserQuery } from '../hooks/useUserQuery';
import { cn } from '../lib/utils';
import { useUserStore } from '../store/user';

export function UserPage() {
  const { username } = useParams<{ username: string }>()
  const { isRefetching, isError } = useUserQuery({ username })

  const { user } = useUserStore()

  useEffect(() => {
    useUserStore.setState({
      isLoading: !isRefetching
    })
  }, [])

  if (!username) {
    redirect('/');
    return
  }

  if (isError) return <UserNotFound term={username} />

  return (
    <main className={cn([
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
