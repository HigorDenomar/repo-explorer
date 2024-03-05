import { HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { SearchForm } from './search-form';
import { ToggleTheme } from './toggle-theme';

export function Header() {

  return (
    <header className='sticky inset-0 z-10 bg-white dark:bg-black flex gap-2 sm:gap-4 justify-between min-h-16 sm:min-h-20 border-b pl-4'>
      <ToggleTheme />

      <SearchForm />

      <Link
        to='/favoritos'
        className='flex items-center justify-center gap-2 bg-primary px-3 sm:px-6 text-white text-sm font-medium'
      >
        <HiOutlineHeart size={24} />

        Favoritos
      </Link>
    </header>
  )
}
