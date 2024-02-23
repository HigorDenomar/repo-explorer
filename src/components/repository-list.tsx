import { RepositoryCard } from './repository-card';

export function RepositoryList() {
  const repositories = Array.from({ length: 10 })

  return (
    <article className='col-span-1 w-full mt-10 md:mt-0'>
      <h2 className='text-primary font-semibold text-xl mb-4 text-center md:text-start'>Repositórios</h2>

      <ul className='flex flex-col gap-4'>
        {repositories.map((_, index) => (
          <RepositoryCard key={index} />
        ))}
      </ul>
    </article>
  )
}
