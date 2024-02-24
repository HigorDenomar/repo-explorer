import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { RepositoryList } from '../components/repository-list';
import { UserSkeleton } from '../components/skeletons/user-skeleton';
import { cls } from '../lib/utils';
import { UserService } from '../services/user.service';
import { useUserStore } from '../store/user';

export function UserPage() {
  const navigate = useNavigate()
  const { username } = useParams<{ username: string }>()

  const { user } = useUserStore()

  const { isRefetching } = useQuery({
    queryKey: ['user', username],
    queryFn: async () => {
      const { data } = await UserService.get(username as string)
      return data
    },
    onSuccess(data) {
      useUserStore.setState({ user: data })
    },
    onError() {
      navigate('/')
    },
    onSettled() {
      useUserStore.setState({ isLoading: false })
    },
    enabled: !!username,
    retry: false,
    refetchOnWindowFocus: false,
  })

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
        <aside className='flex flex-col items-center text-center h-max col-span-1 border rounded gap-6 px-8 py-10 text-gray-700 text-sm'>
          <img
            src={user.avatar_url}
            alt={`Imagem de perfil de ${user.login}`}
            className='rounded-full w-48 h-48'
          />

          <div>
            <h1 className='font-semibold text-xl'>{user.name}</h1>

            <span>@{user.login}</span>
          </div>

          <p>{user.bio}</p>
        </aside>
      ) : <UserSkeleton />}

      <RepositoryList />
    </main>
  )
}
