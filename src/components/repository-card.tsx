import { HiOutlineHeart } from 'react-icons/hi'
import { cn, formatDate } from '../lib/utils'
import { useFavoriteStore } from '../store/favorite'
import type { Repository } from '../types/github'

type RepositoryCardProps = {
  repository: Repository
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const { favorites, add, remove } = useFavoriteStore()

  const isFavorite = !!favorites.find(favorite => favorite.id === repository.id)

  function handleToFavoriteRepository() {
    if (isFavorite) {
      remove(repository.id)
      return
    }

    add(repository)
  }

  return (
    <li className='flex items-start gap-4 border rounded p-4'>
      <div className='w-full'>
        <a
          href={repository.html_url}
          target='_blank'
          className='font-semibold text-lg dark:text-white hover:text-primary dark:hover:text-primary transition-colors [overflow-wrap:anywhere]'
        >
          {repository.name}
        </a>

        {repository.description ? (
          <p className='text-gray-500 dark:text-gray-300 text-sm mt-1'>{repository.description}</p>
        ) : null}

        <div className='flex gap-6 mt-4 text-xs dark:text-white'>
          {repository.language ? (
            <span className='tech' datatype={repository.language}>{repository.language}</span>
          ) : null}

          <span>
            Updated on
            {' '}
            <time className='capitalize' dateTime={repository.updated_at}>
              {formatDate(repository.updated_at)}
            </time>
          </span>
        </div>
      </div>

      <button
        type='button'
        className={cn(
          'group border hover:text-white rounded-full min-h-10 min-w-10 flex items-center justify-center transition-colors', {
          'border-primary text-primary bg-transparent hover:bg-primary dark:hover:text-slate-950': isFavorite,
          'text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-slate-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-slate-700 hover:border-primary dark:hover:border-transparent': !isFavorite,
        })}
        onClick={handleToFavoriteRepository}
        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        data-testid='favorite-button'
      >
        <HiOutlineHeart
          size={18}
          className={cn({
            'fill-primary group-hover:fill-primary dark:group-hover:fill-slate-950': isFavorite,
            'group-hover:fill-primary dark:group-hover:fill-transparent': !isFavorite
          })}
        />
      </button>
    </li>
  )
}
