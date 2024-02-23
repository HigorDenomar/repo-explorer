import findUserImg from '../assets/find-user.svg'
import { UserNotFound } from '../components/user-not-found'
import type { User } from '../types/github'

export function Home() {
  const search = 'MHshdahsudl'
  const user = {} as User

  if (search && !user?.id) {
    return <UserNotFound term={search} />
  }

  return (
    <main className='flex flex-col p-4 justify-center items-center min-h-svh -mt-20 text-gray-600 text-center'>
      <h2 className='text-xl font-semibold'>Procure pelo Nome ou Nome de Usuário</h2>

      <p className='mb-12'>Encontre os repositórios de algum usuário digitando no campo acima</p>

      <img src={findUserImg} alt="Ilustração de uma mulher procurando algo em uma página web" />
    </main>
  )
}
