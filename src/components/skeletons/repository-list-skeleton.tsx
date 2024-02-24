import { HiOutlineHeart } from 'react-icons/hi';

type RepositoryListSkeletonProps = {
  quantity?: number
}

export function RepositoryListSkeleton({ quantity = 10 }: RepositoryListSkeletonProps) {
  return (
    <article className='col-span-1 w-full mt-10 md:mt-0'>
      <h2 className='text-primary font-semibold text-xl mb-4 text-center md:text-start'>Repositórios</h2>

      <ul className='flex flex-col gap-4'>
        {Array.from({ length: quantity }).map((_, index) => (
          <li key={index} className='animate-pulse flex items-start gap-4 border rounded p-4'>
            <div className='w-full'>
              <div className="w-full max-w-48 h-4 bg-gray-300 rounded-full" />

              <div className="w-full space-y-3 mt-2">
                <div className="w-full grid grid-cols-3 gap-4">
                  <div className="w-full h-2 bg-gray-300 rounded-full" />
                  <div className="w-full h-2 bg-gray-300 rounded-full" />
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full" />
              </div>

              <div className='flex items-center mt-4 text-xs'>
                <div className="min-w-4 h-4 mr-2 bg-gray-300 rounded-full" />
                <div className="w-full max-w-28 h-2 bg-gray-300 rounded-full" />
                <div className="w-full max-w-28 h-2 ml-6 bg-gray-300 rounded-full" />
              </div>
            </div>

            <div
              className='border bg-gray-100 rounded-full min-h-10 min-w-10 flex items-center justify-center'
            >
              <HiOutlineHeart
                size={18}
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
