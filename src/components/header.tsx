import { HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { SearchForm } from './search-form';

export function Header() {

  return (
    <header className='sticky inset-0 z-10 bg-white flex justify-between min-h-20 border-b'>
      <SearchForm />

      <Link
        to='/favoritos'
        className='flex items-center justify-center gap-2 bg-primary px-6 text-white text-sm font-medium'
      >
        <HiOutlineHeart size={24} />

        Favoritos
      </Link>
    </header>
  )
}
