import { HiOutlineHeart } from 'react-icons/hi'
import { cls } from '../lib/utils'

type RepositoryCardProps = {
  repository?: unknown
}

export function RepositoryCard({ repository }: RepositoryCardProps) {

  console.log(repository)
  return (
    <li className='flex items-start gap-4 border rounded p-4'>
      <div className='w-full'>
        <h3 className='font-semibold text-lg'>Pokepiker</h3>

        <p className='text-gray-500 text-sm mt-1 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis animi minima nam voluptatibus illum et voluptatum nemo sint rem dolor quibusdam vel, maiores eveniet aliquid magni odio blanditiis architecto veritatis.</p>

        <div className='flex gap-6 text-xs'>
          <span>Typescript</span>
          <data>Updated on 17 Apr 2021</data>
        </div>
      </div>

      <button type='button' className={cls(
        'border bg-gray-200 rounded-full min-h-10 min-w-10 flex items-center justify-center', {
        'border-primary text-primary bg-transparent': false
      })}>
        <HiOutlineHeart
          size={18}
          className={cls({ 'fill-primary': false })}
        />
      </button>
    </li>
  )
}
