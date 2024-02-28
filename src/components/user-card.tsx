import { useUserStore } from '../store/user'

export function UserCard() {
  const { user } = useUserStore()

  if (!user) return null

  return (
    <aside className='relative' data-testid='user-card'>
      <div className='md:sticky md:inset-28 flex flex-col items-center text-center h-max col-span-1 border rounded gap-6 px-8 py-10 text-gray-700 text-sm'>
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
      </div>
    </aside>
  )
}
