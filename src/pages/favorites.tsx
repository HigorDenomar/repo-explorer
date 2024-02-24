import { RepositoryCard } from '../components/repository-card'
import { useFavoriteStore } from '../store/favorite'

export function FavoritesPage() {
  const { favorites } = useFavoriteStore()
  return (
    <main className='p-4 pt-6  max-w-4xl mx-auto'>
      <h2 className='text-primary font-semibold text-xl mb-6 text-center'>Meus favoritos</h2>

      <ul className='flex flex-col gap-4'>
        {favorites.map((favorite) => (
          <RepositoryCard key={favorite.id} repository={favorite} />
        ))}
      </ul>
    </main>
  )
}
