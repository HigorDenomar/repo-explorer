import { HiOutlineHeart } from 'react-icons/hi'
import { cls, formatDate } from '../lib/utils'
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
          className='font-semibold text-lg'
        >
          {repository.name}
        </a>

        {repository.description ? (
          <p className='text-gray-500 text-sm mt-1'>{repository.description}</p>
        ) : null}

        <div className='flex gap-6 mt-4 text-xs'>
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
        className={cls(
          'border bg-gray-100 rounded-full min-h-10 min-w-10 flex items-center justify-center', {
          'border-primary text-primary bg-transparent': isFavorite
        })}
        onClick={handleToFavoriteRepository}
      >
        <HiOutlineHeart
          size={18}
          className={cls({ 'fill-primary': isFavorite })}
        />
      </button>
    </li>
  )
}
