import type { FormEvent } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export function Header() {
  function handleSearch(event: FormEvent) {
    event.preventDefault()
  }
  return (
    <header className='flex justify-between min-h-20 border-b'>
      <form onSubmit={handleSearch} className='flex border rounded my-5 mx-6 h-10 w-full max-w-2xl'>
        <input
          type="text"
          placeholder='Buscar usuário'
          className='w-full h-full text-sm pl-4 rounded placeholder:text-gray-500'
        />

        <button type='submit' className='px-3'>
          <IoSearch size={24} strokeWidth={20} className='text-gray-500' />
        </button>
      </form>

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
