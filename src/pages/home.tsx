import { Player } from '@lottiefiles/react-lottie-player';

import findUserJson from '../assets/find-user.json';
import { UserNotFound } from '../components/user-not-found';
import { useSearchStore } from '../store/search';
import { useUserStore } from '../store/user';

export function HomePage() {
  const { search } = useSearchStore()
  const { user } = useUserStore()

  if (search && !user?.id) {
    return <UserNotFound term={search} />
  }

  return (
    <main className='flex flex-col p-4 justify-center items-center min-h-svh -mt-20 text-gray-600 dark:text-white text-center'>
      <h2 className='text-xl font-semibold'>Procure pelo Nome ou Nome de Usuário</h2>

      <p className='mb-12'>Encontre os repositórios de algum usuário digitando no campo acima</p>

      <Player
        autoplay={true}
        loop={true}
        src={findUserJson}
        style={{ height: '300px', width: '300px' }}
      ></Player>
    </main>
  )
}
